import React from 'react';

const UtilityNav: React.FC = () => {
  return (
    <div className="bg-gray-100 h-10 flex items-center justify-end px-4">
      <div className="flex items-center space-x-5 text-sm">
        <a href="#" className="text-blue-900 hover:text-blue-700 font-medium">
          Newsroom
        </a>
        <div className="w-px h-4 bg-gray-400"></div>
        <a href="#" className="text-blue-900 hover:text-blue-700 font-medium">
          Careers
        </a>
        <div className="w-px h-4 bg-gray-400"></div>
        <a href="#" className="text-blue-900 hover:text-blue-700 font-medium">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default UtilityNav;
