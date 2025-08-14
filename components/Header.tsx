import React from 'react';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 w-full border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-start h-16">
          <div className="flex items-center space-x-3">
            <BriefcaseIcon className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-slate-800 tracking-tight">ContractPak</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
