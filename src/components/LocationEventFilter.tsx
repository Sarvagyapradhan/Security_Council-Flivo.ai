import React, { useState } from 'react';

interface LocationEventFilterProps {
  title: string;
  placeholder: string;
  options: string[];
}

const LocationEventFilter: React.FC<LocationEventFilterProps> = ({ title, placeholder, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="w-[308px] h-[289px] relative">
      {/* Title */}
      <div className="absolute left-[14px] top-0 w-[280px] h-[20px] flex items-center">
        <span className="text-[#333] font-medium text-[16px] leading-normal">{title}</span>
      </div>

      {/* Main Dropdown */}
      <div className="absolute left-[14px] top-[28px] w-[280px] h-[60px] relative">
        <div className="w-[280px] h-[60px] rounded-lg border border-black/26 bg-white shadow-lg absolute left-0 top-0"></div>
        
        {/* Chevron */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-[32px] top-[28px] w-[10px] h-[5px]"
        >
          <svg className="w-3 h-2 opacity-80" viewBox="0 0 12 7" fill="none">
            <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Placeholder/Selected Text */}
        <div className="absolute left-[16px] top-[20px] w-[184px] h-[20px] flex items-center">
          <span className="text-[#666] font-normal text-[16px] leading-normal">
            {selectedValue || placeholder}
          </span>
        </div>
      </div>

      {/* Dropdown List - Only show when open */}
      {isOpen && (
        <div className="absolute left-[14px] top-[96px] w-[280px] rounded-lg shadow-lg bg-white border border-black/10 z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="w-full h-[44px] px-4 py-3 flex items-center hover:bg-gray-50 border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              <span className="text-[#333] font-normal text-[16px] leading-normal">{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationEventFilter;
