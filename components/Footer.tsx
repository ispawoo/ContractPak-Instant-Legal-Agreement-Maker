import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <p className="text-sm text-slate-500">
                This is a tool for convenience and not a substitute for legal advice. Consult a lawyer for serious legal matters.
            </p>
             <p className="text-sm text-slate-500 mt-4">
                &copy; {new Date().getFullYear()} ContractPak. All Rights Reserved.
             </p>
            <p className="text-sm text-slate-500 mt-4">
                Powered by: <a href="https://Instagram.com/the.ispawoo" target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 hover:text-green-700">Yasir Ali</a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;