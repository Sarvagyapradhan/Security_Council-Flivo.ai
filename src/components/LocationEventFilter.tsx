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
    <div className="w-full min-w-[280px] relative">
      {/* Title and Dropdown Container */}
      <div className="flex flex-col gap-2">
        {/* Title */}
        <div className="flex items-center min-h-[20px]">
          <span className="text-[#333] font-medium text-[16px] leading-normal">{title}</span>
        </div>

        {/* Main Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full h-[60px] px-4 py-3 rounded-lg border border-black/26 bg-white shadow-lg flex items-center justify-between hover:shadow-xl transition-all duration-200"
            aria-label="Toggle dropdown menu"
          >
            {/* Placeholder/Selected Text */}
            <span className="text-[#666] font-normal text-[16px] leading-normal">
              {selectedValue || placeholder}
            </span>

            {/* Chevron */}
            <svg className="w-3 h-2 opacity-80" viewBox="0 0 12 7" fill="none">
              <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dropdown List - Only show when open */}
          {isOpen && (
            <div
              className="absolute top-[64px] left-0 w-full max-h-[200px] overflow-y-auto rounded-lg shadow-lg bg-white border border-black/10 z-10 scroll-touch"
              onWheel={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              onTouchMove={(e) => {
                e.stopPropagation();
              }}
              onScroll={(e) => {
                e.stopPropagation();
              }}

            >
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="w-full h-[44px] px-4 py-3 flex items-center hover:bg-gray-50 border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg transition-colors text-left"
                >
                  <span className="text-[#333] font-normal text-[16px] leading-normal">{option}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationEventFilter;
