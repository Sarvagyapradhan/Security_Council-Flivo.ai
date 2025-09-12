import React from 'react';

const UtilityNav: React.FC = () => {
  return (
    <div className="bg-[#F4F4F4] h-[41px] flex items-center justify-end">
      <div className="flex items-center gap-5 pr-6">
        <a href="#" className="text-[#002856] hover:text-blue-700 font-medium text-[13px]">
          Newsroom
        </a>
        <div className="w-px h-[17px] bg-[#C3C3C3]"></div>
        <a href="#" className="text-[#002856] hover:text-blue-700 font-medium text-[13px]">
          Careers
        </a>
        <div className="w-px h-[17px] bg-[#C3C3C3]"></div>
        <button className="text-[#002856] hover:text-blue-700 font-medium text-[13px] px-4 py-3 rounded">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default UtilityNav;
