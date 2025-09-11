import React from 'react';

const MainNav: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b h-28 flex items-center justify-center">
      <div className="w-full max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-blue-900 font-bold text-xl">
          Security Council
        </div>

        {/* Main Navigation */}
        <div className="flex items-center space-x-6 text-blue-900">
          <a href="#" className="text-sm font-medium hover:text-blue-700">
            Who we guide
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-700">
            Our Intelligence
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-700">
            Latest Insight
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-700">
            Briefings
          </a>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-end">
          <button className="bg-blue-700 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-blue-800 flex items-center">
            <span>Request a Threat Posture Report</span>
            <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </button>
          <span className="text-xs text-blue-900 mt-1">or call 1 855 687 3726</span>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
