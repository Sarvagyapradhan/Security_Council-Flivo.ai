import React from 'react';
import OptimizedImage from './OptimizedImage';

const Header: React.FC = () => (
    <header className="bg-teal-900 text-white flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="font-bold text-lg tracking-wide">SECURITY COUNCIL</div>

        {/* Center Navigation */}
        <nav className="space-x-8">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-3">
            <OptimizedImage src="/avatars/default-avatar.webp" alt="User avatar" className="w-8 h-8 rounded-full" eager/>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Share Prototype</button>
        </div>
    </header>
);

export default Header;
