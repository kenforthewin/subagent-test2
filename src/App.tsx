import { useState } from 'react';
import { BirthDateInput } from './components/BirthDateInput';
import { ViewSwitcher } from './components/ViewSwitcher';
import { getAge, formatDate } from './utils/dateHelpers';
import type { CalendarView } from './types/calendar';

function App() {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [currentDate] = useState<Date>(new Date());
  const [currentView, setCurrentView] = useState<CalendarView>('month');

  const handleBirthDateSubmit = (date: Date) => {
    setBirthDate(date);
  };

  if (!birthDate) {
    return <BirthDateInput onSubmit={handleBirthDateSubmit} />;
  }

  const age = getAge(birthDate);
  const birthDateFormatted = formatDate(birthDate, 'MMMM d, yyyy');
  const currentDateFormatted = formatDate(currentDate, 'EEEE, MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Life Calendar
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {currentDateFormatted}
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {age}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                years old
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Born: {birthDateFormatted}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* View Switcher */}
      <ViewSwitcher currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 min-h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {currentView.charAt(0).toUpperCase() + currentView.slice(1)} View
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {currentView === 'day' && 'Daily calendar view will be implemented here'}
              {currentView === 'week' && 'Weekly calendar view will be implemented here'}
              {currentView === 'month' && 'Monthly calendar view will be implemented here'}
              {currentView === 'year' && 'Yearly calendar view will be implemented here'}
              {currentView === 'lifetime' && 'Lifetime calendar view will be implemented here'}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

