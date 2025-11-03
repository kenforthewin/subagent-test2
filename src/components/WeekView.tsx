import {
  startOfWeek,
  endOfWeek,
  addWeeks,
  subWeeks,
  eachDayOfInterval,
  format,
} from 'date-fns';
import { isToday, isSameDay } from '../utils/dateHelpers';

interface WeekViewProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

export function WeekView({ currentDate, onDateChange }: WeekViewProps) {
  // Start week on Monday, end on Sunday
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
  const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });
  const today = new Date();

  const handlePreviousWeek = () => {
    onDateChange(subWeeks(currentDate, 1));
  };

  const handleNextWeek = () => {
    onDateChange(addWeeks(currentDate, 1));
  };

  const handleThisWeek = () => {
    onDateChange(new Date());
  };

  const isCurrentWeek = isSameDay(today, currentDate) || 
    (today >= weekStart && today <= weekEnd);

  const weekRangeStart = format(weekStart, 'MMM d');
  const weekRangeEnd = format(weekEnd, 'MMM d, yyyy');

  return (
    <div className="flex flex-col h-full">
      {/* Header with navigation */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePreviousWeek}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Previous week"
          >
            <span className="text-lg">←</span>
            <span className="hidden sm:inline text-sm font-medium">Previous</span>
          </button>

          <div className="text-center flex-1 mx-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {weekRangeStart} - {weekRangeEnd}
            </h2>
          </div>

          <button
            onClick={handleNextWeek}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Next week"
          >
            <span className="hidden sm:inline text-sm font-medium">Next</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {!isCurrentWeek && (
          <button
            onClick={handleThisWeek}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Go to This Week
          </button>
        )}
      </div>

      {/* Week grid */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid grid-cols-7 gap-2 sm:gap-4">
          {daysInWeek.map((day) => {
            const isCurrentDay = isToday(day);
            const isSelectedDay = isSameDay(day, currentDate);
            const dayName = format(day, 'EEE'); // Mon, Tue, etc.
            const dayNumber = format(day, 'd'); // 1, 2, etc.

            return (
              <button
                key={day.toISOString()}
                onClick={() => onDateChange(day)}
                className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  isSelectedDay
                    ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 shadow-md'
                    : isCurrentDay
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-500 hover:border-green-600'
                      : 'bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500'
                }`}
              >
                <span
                  className={`text-xs sm:text-sm font-medium ${
                    isCurrentDay
                      ? 'text-green-600 dark:text-green-400'
                      : isSelectedDay
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {dayName}
                </span>
                <span
                  className={`text-lg sm:text-2xl font-bold mt-1 ${
                    isCurrentDay
                      ? 'text-green-600 dark:text-green-400'
                      : isSelectedDay
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {dayNumber}
                </span>
                {isCurrentDay && (
                  <span className="text-xs mt-1 px-2 py-0.5 bg-green-500 text-white rounded-full">
                    Today
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

