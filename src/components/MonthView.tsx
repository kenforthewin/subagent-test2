import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameMonth,
  isBefore,
  startOfDay,
  format,
} from 'date-fns';
import { isToday, isSameDay } from '../utils/dateHelpers';

interface MonthViewProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  birthDate: Date;
}

export function MonthView({
  currentDate,
  onDateChange,
  birthDate,
}: MonthViewProps) {
  // Get the bounds of the month
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);

  // Get the week boundaries (to fill the grid completely)
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 }); // Sunday

  // Get all days to display in the calendar grid
  const allDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const today = new Date();
  const birthDateStart = startOfDay(birthDate);

  const handlePreviousMonth = () => {
    onDateChange(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    onDateChange(addMonths(currentDate, 1));
  };

  const handleThisMonth = () => {
    onDateChange(new Date());
  };

  const monthYear = format(currentDate, 'MMMM yyyy');
  const isCurrentMonth = isSameMonth(today, currentDate);

  // Days of the week header
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="flex flex-col h-full">
      {/* Header with navigation */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePreviousMonth}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Previous month"
          >
            <span className="text-lg">←</span>
            <span className="hidden sm:inline text-sm font-medium">Previous</span>
          </button>

          <div className="text-center flex-1 mx-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {monthYear}
            </h2>
          </div>

          <button
            onClick={handleNextMonth}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Next month"
          >
            <span className="hidden sm:inline text-sm font-medium">Next</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {!isCurrentMonth && (
          <button
            onClick={handleThisMonth}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Go to This Month
          </button>
        )}
      </div>

      {/* Calendar grid */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="space-y-4">
          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-center text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days grid */}
          <div className="grid grid-cols-7 gap-2 sm:gap-3">
            {allDays.map((day) => {
              const isCurrentDay = isToday(day);
              const isSelectedDay = isSameDay(day, currentDate);
              const isBirthDay = isSameDay(day, birthDateStart);
              const isInCurrentMonth = isSameMonth(day, currentDate);
              const isBeforeBirth = isBefore(day, birthDateStart);

              return (
                <button
                  key={day.toISOString()}
                  onClick={() => onDateChange(day)}
                  disabled={isBeforeBirth}
                  className={`
                    aspect-square flex items-center justify-center rounded-lg border-2 font-semibold
                    text-sm sm:text-base transition-all cursor-pointer
                    ${
                      isBeforeBirth
                        ? 'bg-gray-100 dark:bg-slate-700/50 border-gray-200 dark:border-slate-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                        : isSelectedDay && isCurrentDay
                          ? 'bg-green-100 dark:bg-green-900/40 border-green-500 text-green-700 dark:text-green-400 shadow-md'
                          : isCurrentDay
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30'
                            : isSelectedDay
                              ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 text-blue-600 dark:text-blue-400 shadow-md'
                              : isInCurrentMonth
                                ? 'bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600 hover:border-gray-300 dark:hover:border-slate-500'
                                : 'bg-gray-50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 text-gray-400 dark:text-gray-500'
                    }
                  `}
                >
                  <div className="relative flex flex-col items-center">
                    <span>{format(day, 'd')}</span>
                    {isBirthDay && (
                      <span className="text-xs mt-0.5">🎂</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

