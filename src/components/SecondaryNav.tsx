import React from 'react';

const SecondaryNav: React.FC = () => (
    <nav className="bg-white shadow px-8 py-3 flex items-center justify-between">
        {/* Brand Section */}
        <span className="text-blue-900 font-extrabold text-xl">Security Council</span>

        {/* Main Navigation */}
        <div className="space-x-6 text-gray-700">
            <a href="#" className="hover:text-blue-700">Who we guide</a>
            <a href="#" className="hover:text-blue-700">Our Intelligence</a>
            <a href="#" className="hover:text-blue-700">Latest Insight</a>
            <a href="#" className="hover:text-blue-700">Event</a>
        </div>

        {/* CTA and Phone */}
        <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-blue-500">Newsroom</a>
            <a href="#" className="text-sm text-gray-400 hover:text-blue-500">Careers</a>
            <a href="#" className="text-sm text-gray-400 hover:text-blue-500">Sign In</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-700">
                <span className="mr-2">Request a Threat Posture Report</span>
                <svg width={18} height={18} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
            </button>
            <span className="ml-2 text-xs text-gray-500">or call 1 855 687 3726</span>
        </div>
    </nav>
);

export default SecondaryNav;
