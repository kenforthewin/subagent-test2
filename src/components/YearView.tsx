import {
  startOfYear,
  endOfYear,
  eachMonthOfInterval,
  addYears,
  subYears,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isBefore,
  startOfDay,
  format,
  getMonth,
  getYear,
} from 'date-fns';
import { isToday, isSameDay } from '../utils/dateHelpers';

interface YearViewProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  birthDate: Date;
}

export function YearView({
  currentDate,
  onDateChange,
  birthDate,
}: YearViewProps) {
  const yearStart = startOfYear(currentDate);
  const yearEnd = endOfYear(currentDate);
  const months = eachMonthOfInterval({
    start: yearStart,
    end: yearEnd,
  });

  const today = new Date();
  const currentYear = getYear(currentDate);
  const isCurrentYear = getYear(today) === currentYear;

  const handlePreviousYear = () => {
    onDateChange(subYears(currentDate, 1));
  };

  const handleNextYear = () => {
    onDateChange(addYears(currentDate, 1));
  };

  const handleThisYear = () => {
    onDateChange(new Date());
  };

  const handleMonthClick = (month: Date) => {
    // Set currentDate to the first day of the clicked month
    onDateChange(startOfMonth(month));
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header with navigation */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePreviousYear}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Previous year"
          >
            <span className="text-lg">←</span>
            <span className="hidden sm:inline text-sm font-medium">Previous</span>
          </button>

          <div className="text-center flex-1 mx-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {currentYear}
            </h2>
          </div>

          <button
            onClick={handleNextYear}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Next year"
          >
            <span className="hidden sm:inline text-sm font-medium">Next</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {!isCurrentYear && (
          <button
            onClick={handleThisYear}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Go to This Year
          </button>
        )}
      </div>

      {/* Year grid with 12 mini calendars */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {months.map((month) => (
            <MiniCalendar
              key={month.toISOString()}
              month={month}
              currentDate={currentDate}
              onDateChange={onDateChange}
              birthDate={birthDate}
              onMonthClick={handleMonthClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface MiniCalendarProps {
  month: Date;
  currentDate: Date;
  onDateChange: (date: Date) => void;
  birthDate: Date;
  onMonthClick: (month: Date) => void;
}

function MiniCalendar({
  month,
  currentDate,
  onDateChange,
  birthDate,
  onMonthClick,
}: MiniCalendarProps) {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const allDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const today = new Date();
  const birthDateStart = startOfDay(birthDate);
  const isCurrentMonth = isSameMonth(today, month);
  const birthMonth = getMonth(birthDate);
  const birthYear = getYear(birthDate);
  const currentMonth = getMonth(month);
  const currentYear = getYear(month);
  const isBirthMonth = birthMonth === currentMonth && birthYear === currentYear;
  const isBeforeBirthMonth = isBefore(monthEnd, startOfDay(birthDate));

  const monthName = format(month, 'MMM');
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <button
      onClick={() => onMonthClick(month)}
      className={`
        p-3 sm:p-4 rounded-lg border-2 transition-all text-left
        ${
          isBeforeBirthMonth
            ? 'bg-gray-50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 cursor-not-allowed opacity-50'
            : isCurrentMonth
              ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 shadow-md'
              : isBirthMonth
                ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                : 'bg-white dark:bg-slate-700 border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 hover:shadow-md'
        }
      `}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className={`text-sm font-bold ${
          isBeforeBirthMonth
            ? 'text-gray-400 dark:text-gray-600'
            : isCurrentMonth
              ? 'text-blue-600 dark:text-blue-400'
              : isBirthMonth
                ? 'text-green-600 dark:text-green-400'
                : 'text-gray-900 dark:text-white'
        }`}>
          {monthName}
        </h3>
        {isCurrentMonth && (
          <span className="text-xs px-2 py-0.5 bg-blue-500 text-white rounded-full">
            Now
          </span>
        )}
        {isBirthMonth && isCurrentMonth === false && (
          <span className="text-xs">🎂</span>
        )}
      </div>

      {/* Week days header */}
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-semibold text-gray-500 dark:text-gray-400"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-0.5">
        {allDays.map((day) => {
          const dayInMonth = isSameMonth(day, month);
          const isCurrentDay = isToday(day) && dayInMonth;
          const isSelectedDay = isSameDay(day, currentDate);
          const isBeforeBirth = isBefore(day, birthDateStart);

          return (
            <button
              key={day.toISOString()}
              onClick={(e) => {
                e.stopPropagation();
                onDateChange(day);
              }}
              disabled={isBeforeBirth}
              className={`
                text-xs aspect-square flex items-center justify-center rounded font-semibold
                transition-all ${
                  isBeforeBirth
                    ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                    : isSelectedDay && isCurrentDay
                      ? 'bg-green-500 text-white'
                      : isCurrentDay
                        ? 'bg-green-400 text-white'
                        : isSelectedDay
                          ? 'bg-blue-500 text-white'
                          : dayInMonth
                            ? 'text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600'
                            : 'text-gray-300 dark:text-gray-600'
                }
              `}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </button>
  );
}

