import { useState } from 'react';

interface BirthDateInputProps {
  onSubmit: (date: Date) => void;
}

export function BirthDateInput({ onSubmit }: BirthDateInputProps) {
  const [dateInput, setDateInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!dateInput) {
      setError('Please select a birth date');
      return;
    }

    const selectedDate = new Date(dateInput);
    const today = new Date();

    // Check if date is in the past
    if (selectedDate >= today) {
      setError('Birth date must be in the past');
      return;
    }

    // Check if date is reasonable (not more than 120 years ago)
    const age = today.getFullYear() - selectedDate.getFullYear();
    if (age > 120) {
      setError('Birth date seems unreasonable (more than 120 years ago)');
      return;
    }

    // All validation passed
    onSubmit(selectedDate);
  };

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 1);
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl p-8 w-full max-w-md mx-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Life Calendar
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          Enter your birth date to get started
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Birth Date
            </label>
            <input
              id="birthDate"
              type="date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              max={today}
              min={minDate.toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            Continue
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
          Your birth date will be stored locally in your browser.
        </p>
      </div>
    </div>
  );
}

