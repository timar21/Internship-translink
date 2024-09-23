"use client";
import React, { useState } from 'react';
import { updateFetchFuelSettings } from '@/services/fuelfetch';
const DateRangeSelector: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<string>('Today');
  const [customDate, setCustomDate] = useState<string | null>(null);
  
  const { error, loading, updateFuelSettings } = updateFetchFuelSettings();
  const handleRangeClick = (range: string) => {
    
    setSelectedRange(range);
    setCustomDate(null); 
    if (range === "Today") {
      updateFuelSettings(); 
    }
  };

  const handleCustomDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRange('Custom');
    setCustomDate(event.target.value);
  };

  return (
    <div className="p-4 bg-blue-50 flex gap-10 w-[60%]">
      <div className="inline-flex border rounded-lg">
        <button
          onClick={() => handleRangeClick('Yesterday')}
          className={`px-4 py-2 ${selectedRange === 'Yesterday' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
        >
          Yesterday
        </button>
        <button
          onClick={() => handleRangeClick('Today')}
          className={`px-4 py-2 ${selectedRange === 'Today' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
        >
          Today
        </button>
        <button
          onClick={() => handleRangeClick('Week')}
          className={`px-4 py-2 ${selectedRange === 'Week' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
        >
          Week
        </button>
        <button
          onClick={() => handleRangeClick('Month')}
          className={`px-4 py-2 ${selectedRange === 'Month' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
        >
          Month
        </button>
        <button
          onClick={() => handleRangeClick('Custom')}
          className={`px-4 py-2 ${selectedRange === 'Custom' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
        >
          Custom
        </button>
      </div>
      {selectedRange === 'Custom' && (
        <div className="">
          
          <input
            type="date"
            className="mt-1 p-2 border rounded-lg"
            onChange={handleCustomDateChange}
          />
        </div>
      )}
      {customDate && (
        <div className="mt-4 text-sm text-gray-600">
          Selected Date: <strong>{customDate}</strong>
        </div>
      )}
      <div className="">
        <button
          onClick={() => alert(`Selected range: ${selectedRange}${customDate ? ` (${customDate})` : ''}`)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default DateRangeSelector;
