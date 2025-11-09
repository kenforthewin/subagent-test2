import { addDays, subDays, startOfDay, format } from 'date-fns';
import { isToday } from '../utils/dateHelpers';

interface DayViewProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

export function DayView({ currentDate, onDateChange }: DayViewProps) {
  const displayDate = startOfDay(currentDate);
  const today = new Date();
  const currentHour = today.getHours();
  const isCurrentDay = isToday(displayDate);

  const handlePreviousDay = () => {
    onDateChange(subDays(displayDate, 1));
  };

  const handleNextDay = () => {
    onDateChange(addDays(displayDate, 1));
  };

  const handleToday = () => {
    onDateChange(new Date());
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const dateFormatted = format(displayDate, 'EEEE, MMMM d, yyyy');

  return (
    <div className="flex flex-col h-full">
      {/* Header with navigation */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePreviousDay}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Previous day"
          >
            <span className="text-lg">←</span>
            <span className="hidden sm:inline text-sm font-medium">Previous</span>
          </button>

          <div className="text-center flex-1 mx-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {dateFormatted}
            </h2>
          </div>

          <button
            onClick={handleNextDay}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Next day"
          >
            <span className="hidden sm:inline text-sm font-medium">Next</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {!isCurrentDay && (
          <button
            onClick={handleToday}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Go to Today
          </button>
        )}
      </div>

      {/* Hours grid */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid gap-1 p-4 sm:p-6">
          {hours.map((hour) => {
            const isCurrentHour = isCurrentDay && hour === currentHour;
            const timeString = `${String(hour).padStart(2, '0')}:00`;

            return (
              <div
                key={hour}
                className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                  isCurrentHour
                    ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-500 shadow-md'
                    : 'bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm sm:text-base font-semibold ${
                      isCurrentHour
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {timeString}
                  </span>
                  {isCurrentHour && (
                    <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                      Now
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

