import React from 'react';

const UtilityNav: React.FC = () => {

  return (
    <div className={`fixed top-0 left-0 right-0 z-[60] bg-[#F4F4F4] border-b border-[#E0E0E0] box-border h-[36px] sm:h-[40px] lg:h-[44px]`}>
      <div className="mx-auto flex h-full w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 text-xs font-medium text-[#002856] sm:px-6 md:text-[13px]">
        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          <a href="#" className="hover:text-blue-700 transition-colors">
            Newsroom
          </a>
          <span className="hidden h-4 w-px bg-[#C3C3C3] md:block" aria-hidden />
          <a href="#" className="hover:text-blue-700 transition-colors">
            Careers
          </a>
        </div>
        <button className="rounded px-3 py-1.5 text-xs text-[#002856] transition-colors hover:text-blue-700 md:px-4 md:py-2 md:text-[13px]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default UtilityNav;
