import { useState } from 'react';
import { getAge, getWeeksLived, getCurrentYear, getBirthYear } from '../utils/dateHelpers';

interface LifetimeViewProps {
  birthDate: Date;
  currentDate: Date;
}

const LIFE_EXPECTANCY = 90;
const DOTS_PER_ROW = 10;

export function LifetimeView({ birthDate }: LifetimeViewProps) {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  
  const age = getAge(birthDate);
  const birthYear = getBirthYear(birthDate);
  const currentYear = getCurrentYear();
  const weeksLived = getWeeksLived(birthDate);
  
  // Calculate all years from birth to life expectancy
  const allYears: Array<{
    year: number;
    status: 'past' | 'current' | 'future';
    ageAtYear: number;
  }> = [];
  
  for (let i = 0; i < LIFE_EXPECTANCY; i++) {
    const year = birthYear + i;
    const ageAtYear = i;
    let status: 'past' | 'current' | 'future' = 'future';
    
    if (year < currentYear) {
      status = 'past';
    } else if (year === currentYear) {
      status = 'current';
    } else {
      status = 'future';
    }
    
    allYears.push({ year, status, ageAtYear });
  }
  
  // Calculate grid layout
  const totalDots = allYears.length;
  const totalRows = Math.ceil(totalDots / DOTS_PER_ROW);
  
  // Create rows
  const rows: Array<Array<typeof allYears[0]>> = [];
  for (let i = 0; i < totalRows; i++) {
    const start = i * DOTS_PER_ROW;
    const end = Math.min(start + DOTS_PER_ROW, totalDots);
    rows.push(allYears.slice(start, end));
  }

  return (
    <div className="flex flex-col h-full overflow-auto">
      {/* Header with summary stats */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-800 border-b border-gray-200 dark:border-slate-600 p-6 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Your Life in Years
          </h2>
          
          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard 
              label="Age Now" 
              value={age.toString()}
              unit="years"
            />
            <StatCard 
              label="Years Lived" 
              value={age.toString()}
              unit="years"
            />
            <StatCard 
              label="Weeks Lived" 
              value={weeksLived.toLocaleString()}
              unit="weeks"
            />
            <StatCard 
              label="Life Expectancy" 
              value={LIFE_EXPECTANCY.toString()}
              unit="years"
            />
          </div>
          
          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-md"></div>
              <span className="text-gray-700 dark:text-gray-300">Lived Years</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 shadow-md ring-2 ring-amber-300 animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300">Current Year</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500 bg-transparent"></div>
              <span className="text-gray-700 dark:text-gray-300">Future Years</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🎂</span>
              <span className="text-gray-700 dark:text-gray-300">Birth Year</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dots grid */}
      <div className="flex-1 overflow-y-auto p-6 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap gap-3 sm:gap-4">
                {row.map((yearData) => (
                  <LifetimeDot
                    key={yearData.year}
                    year={yearData.year}
                    age={yearData.ageAtYear}
                    status={yearData.status}
                    isBirthYear={yearData.year === birthYear}
                    isHovered={hoveredYear === yearData.year}
                    onHover={() => setHoveredYear(yearData.year)}
                    onLeave={() => setHoveredYear(null)}
                  />
                ))}
              </div>
            ))}
          </div>
          
          {/* Bottom message */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Each dot represents one year of your life. Make it count.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  unit: string;
}

function StatCard({ label, value, unit }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-slate-700/50 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-slate-600">
      <div className="text-xs text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide mb-1">
        {label}
      </div>
      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
        {value}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {unit}
      </div>
    </div>
  );
}

interface LifetimeDotProps {
  year: number;
  age: number;
  status: 'past' | 'current' | 'future';
  isBirthYear: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function LifetimeDot({
  year,
  age,
  status,
  isBirthYear,
  isHovered,
  onHover,
  onLeave,
}: LifetimeDotProps) {
  const showDecadeLabel = age % 10 === 0;

  return (
    <div className="flex flex-col items-center relative group">
      {/* Decade label above every 10th dot */}
      <div className="h-4 mb-2">
        {showDecadeLabel && (
          <span className="text-xs font-bold text-gray-400 dark:text-gray-500">
            {age}
          </span>
        )}
      </div>
      
      <button
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onTouchStart={onHover}
        onTouchEnd={onLeave}
        className={`
          relative w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-200 transform
          ${status === 'past' 
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-md hover:shadow-lg hover:scale-125' 
            : status === 'current' 
              ? 'bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg ring-2 ring-amber-300 hover:scale-150 animate-pulse' 
              : 'border-2 border-gray-300 dark:border-gray-500 bg-white dark:bg-slate-700 hover:border-gray-400 dark:hover:border-gray-400 hover:shadow-md hover:scale-125'
          }
          ${isBirthYear ? 'ring-2 ring-offset-2 ring-green-400 dark:ring-offset-slate-800' : ''}
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-800
        `}
        aria-label={`${year} - Age ${age}${status === 'current' ? ' (current year)' : ''}`}
        title={`${year} - Age ${age}`}
      >
        {/* Birth year indicator */}
        {isBirthYear && (
          <span className="absolute inset-0 flex items-center justify-center text-xs">
            🎂
          </span>
        )}
      </button>

      {/* Tooltip on hover */}
      {isHovered && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap z-10 pointer-events-none shadow-lg">
          {year} • Age {age}
          {status === 'current' && ' (Now)'}
        </div>
      )}
    </div>
  );
}

