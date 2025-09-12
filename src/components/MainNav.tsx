import React from 'react';

interface MainNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const MainNav: React.FC<MainNavProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="bg-white shadow-sm border-b h-28 flex items-center justify-center">
      <div className="w-full max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="text-[#002856] font-bold text-[20px] hover:text-blue-700 transition-colors"
        >
          Security Council
        </button>

        {/* Main Navigation */}
        <div className="flex items-center space-x-6 text-[#002856]">
          <button
            onClick={() => onNavigate('who-we-guide')}
            className={`text-[13px] font-medium hover:text-blue-700 pb-2 ${
              currentPage === 'who-we-guide'
                ? 'border-b-2 border-[#0000D3]'
                : 'border-b-2 border-transparent'
            }`}
          >
            Who we guide
          </button>
          <button
            onClick={() => onNavigate('our-intelligence')}
            className={`text-[13px] font-medium hover:text-blue-700 pb-2 ${
              currentPage === 'our-intelligence'
                ? 'border-b-2 border-[#0000D3]'
                : 'border-b-2 border-transparent'
            }`}
          >
            Our Intelligence
          </button>
          <button
            onClick={() => onNavigate('latest-insight')}
            className={`text-[13px] font-medium hover:text-blue-700 pb-2 ${
              currentPage === 'latest-insight'
                ? 'border-b-2 border-[#0000D3]'
                : 'border-b-2 border-transparent'
            }`}
          >
            Latest Insight
          </button>
          <button
            onClick={() => onNavigate('briefings')}
            className={`text-[13px] font-medium hover:text-blue-700 pb-2 ${
              currentPage === 'briefings'
                ? 'border-b-2 border-[#0000D3]'
                : 'border-b-2 border-transparent'
            }`}
          >
            Briefings
          </button>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-end">
          <button className="w-[321px] h-[55px] bg-[#0000D3] text-white rounded border border-[#0000D3] hover:bg-blue-800 flex items-center justify-center relative transition-colors">
            <span className="text-[15px] font-bold">Request a Threat Posture Report</span>
            <svg className="absolute right-4 w-6 h-6" fill="white" viewBox="0 0 27 26">
              <path d="M21.1562 4.0625H4.90625C4.47527 4.0625 4.06195 4.2337 3.7572 4.53845C3.45245 4.8432 3.28125 5.25652 3.28125 5.6875V11.375C3.28125 16.7294 5.87313 19.9743 8.04758 21.7537C10.3896 23.6691 12.7195 24.3191 12.821 24.3466C12.9607 24.3846 13.1079 24.3846 13.2476 24.3466C13.3491 24.3191 15.6759 23.6691 18.021 21.7537C20.1894 19.9743 22.7812 16.7294 22.7812 11.375V5.6875C22.7812 5.25652 22.61 4.8432 22.3053 4.53845C22.0006 4.2337 21.5872 4.0625 21.1562 4.0625ZM17.6706 11.1373L11.9831 16.8248C11.9077 16.9004 11.8181 16.9603 11.7194 17.0012C11.6208 17.0421 11.5151 17.0631 11.4083 17.0631C11.3015 17.0631 11.1958 17.0421 11.0971 17.0012C10.9985 16.9603 10.9089 16.9004 10.8334 16.8248L8.39594 14.3873C8.24348 14.2349 8.15783 14.0281 8.15783 13.8125C8.15783 13.5969 8.24348 13.3901 8.39594 13.2377C8.5484 13.0852 8.75517 12.9995 8.97078 12.9995C9.18639 12.9995 9.39317 13.0852 9.54563 13.2377L11.4062 15.1013L16.5189 9.98766C16.5944 9.91217 16.684 9.85228 16.7826 9.81143C16.8813 9.77058 16.987 9.74955 17.0938 9.74955C17.2005 9.74955 17.3062 9.77058 17.4049 9.81143C17.5035 9.85228 17.5931 9.91217 17.6686 9.98766C17.7441 10.0631 17.804 10.1528 17.8448 10.2514C17.8857 10.35 17.9067 10.4557 17.9067 10.5625C17.9067 10.6693 17.8857 10.775 17.8448 10.8736C17.804 10.9722 17.7441 11.0619 17.6686 11.1373H17.6706Z"/>
            </svg>
          </button>
          <span className="text-[13px] text-[#002856] mt-1 font-medium">or call 1 855 687 3726</span>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
