import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface MainNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAtTop?: boolean;
  onThreatReportClick?: () => void;
}

const MainNav: React.FC<MainNavProps> = ({ currentPage, onNavigate, isAtTop = true, onThreatReportClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Always visible navbar

  // no measurement needed; spacer uses fixed responsive heights

  const handleNavigateAndClose = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <>
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isAtTop
          ? 'top-[36px] sm:top-[40px] lg:top-[44px] bg-white/95'
          : 'top-0 bg-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex w-full max-w-none items-center justify-start px-3 py-4 sm:px-4 lg:px-6">
        <button
          onClick={() => handleNavigateAndClose('home')}
          aria-label="Go to home"
          className="ml-4 sm:ml-6 lg:ml-10 flex items-center"
        >
          <OptimizedImage
            src="/logo_sc.webp"
            alt="Security Council"
            className="h-7 w-auto sm:h-8 lg:h-9"
            eager
          />
        </button>

        <div className="flex items-center gap-4 lg:hidden">
          <button className="rounded bg-[#0000D3] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-800 sm:text-sm" onClick={() => handleNavigateAndClose('events')}>
            Request Report
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-[#002856]/20 text-[#002856]"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden items-center ml-6 lg:ml-10 gap-6 lg:gap-8 pt-1 text-[#002856] lg:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavigateAndClose(id)}
              className={`pb-2 text-[15px] font-medium transition-colors hover:text-blue-700 ${
                currentPage === id ? 'border-b-2 border-[#0000D3]' : 'border-b-2 border-transparent'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden flex-col items-end ml-auto pt-1 lg:flex">
          <button
            className="relative flex h-[52px] w-[300px] items-center justify-center rounded border border-[#0000D3] bg-[#0000D3] text-sm font-bold text-white transition-colors hover:bg-blue-800"
            onClick={onThreatReportClick}
          >
            Request a Threat Posture Report
            <svg className="absolute right-4 h-5 w-5" fill="white" viewBox="0 0 27 26">
              <path d="M21.1562 4.0625H4.90625C4.47527 4.0625 4.06195 4.2337 3.7572 4.53845C3.45245 4.8432 3.28125 5.25652 3.28125 5.6875V11.375C3.28125 16.7294 5.87313 19.9743 8.04758 21.7537C10.3896 23.6691 12.7195 24.3191 12.821 24.3466C12.9607 24.3846 13.1079 24.3846 13.2476 24.3466C13.3491 24.3191 15.6759 23.6691 18.021 21.7537C20.1894 19.9743 22.7812 16.7294 22.7812 11.375V5.6875C22.7812 5.25652 22.61 4.8432 22.3053 4.53845C22.0006 4.2337 21.5872 4.0625 21.1562 4.0625ZM17.6706 11.1373L11.9831 16.8248C11.9077 16.9004 11.8181 16.9603 11.7194 17.0012C11.6208 17.0421 11.5151 17.0631 11.4083 17.0631C11.3015 17.0631 11.1958 17.0421 11.0971 17.0012C10.9985 16.9603 10.9089 16.9004 10.8334 16.8248L8.39594 14.3873C8.24348 14.2349 8.15783 14.0281 8.15783 13.8125C8.15783 13.5969 8.24348 13.3901 8.39594 13.2377C8.5484 13.0852 8.75517 12.9995 8.97078 12.9995C9.18639 12.9995 9.39317 13.0852 9.54563 13.2377L11.4062 15.1013L16.5189 9.98766C16.5944 9.91217 16.684 9.85228 16.7826 9.81143C16.8813 9.77058 16.987 9.74955 17.0938 9.74955C17.2005 9.74955 17.3062 9.77058 17.4049 9.81143C17.5035 9.85228 17.5931 9.91217 17.6686 9.98766C17.7441 10.0631 17.804 10.1528 17.8448 10.2514C17.8857 10.35 17.9067 10.4557 17.9067 10.5625C17.9067 10.6693 17.8857 10.775 17.8448 10.8736C17.804 10.9722 17.7441 11.0619 17.6686 11.1373H17.6706Z" />
            </svg>
          </button>
          <span className="mt-1 text-xs font-medium text-[#002856]">or call 1 855 687 3726</span>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[#E5E7EB] bg-white/90 supports-[backdrop-filter]:backdrop-blur px-4 py-4 sm:px-6 lg:hidden">
          <div className="flex flex-col gap-4 text-[#002856]">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavigateAndClose(id)}
                className={`text-left text-sm font-medium transition-colors hover:text-blue-700 ${
                  currentPage === id ? 'text-blue-700' : ''
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
    {/* Spacer to offset fixed nav height */}
    <div className="h-[100px] sm:h-[108px] lg:h-[116px]" />
    </>
  );
};

const NAV_LINKS = [
  { id: 'who-we-guide', label: 'Who we guide' },
  { id: 'our-intelligence', label: 'Our Intelligence' },
  { id: 'latest-insight', label: 'Latest Insight' },
  { id: 'events', label: 'Events' },
];

export default MainNav;
