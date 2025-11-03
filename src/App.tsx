import { useState } from 'react';
import { BirthDateInput } from './components/BirthDateInput';
import { ViewSwitcher } from './components/ViewSwitcher';
import { DayView } from './components/DayView';
import { WeekView } from './components/WeekView';
import { MonthView } from './components/MonthView';
import { YearView } from './components/YearView';
import { LifetimeView } from './components/LifetimeView';
import { getAge, formatDate } from './utils/dateHelpers';
import type { CalendarView } from './types/calendar';

function App() {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
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
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md min-h-96 flex flex-col">
          {currentView === 'day' && (
            <DayView currentDate={currentDate} onDateChange={setCurrentDate} />
          )}
          {currentView === 'week' && (
            <WeekView currentDate={currentDate} onDateChange={setCurrentDate} />
          )}
          {currentView === 'month' && (
            <MonthView currentDate={currentDate} onDateChange={setCurrentDate} birthDate={birthDate!} />
          )}
          {currentView === 'year' && (
            <YearView currentDate={currentDate} onDateChange={setCurrentDate} birthDate={birthDate!} />
          )}
          {currentView === 'lifetime' && (
            <LifetimeView birthDate={birthDate!} currentDate={currentDate} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

