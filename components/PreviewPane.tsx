import React from 'react';
import { ContractTemplate, ContractData, Clause } from '../types';
import { PencilIcon } from './icons/PencilIcon';

interface PreviewPaneProps {
  template: ContractTemplate;
  contractData: ContractData;
  logo: string | null;
  onEditClause: (clause: Clause) => void;
}

const replacePlaceholders = (text: string, data: ContractData): string => {
  return text.replace(/\{\{([A-Z_]+)\}\}/g, (match, key) => {
    const value = data[key];
    if (value && value.trim() !== '') {
        return `<strong class="text-green-700 font-medium break-words">${value}</strong>`;
    }
    return `<span class="text-red-500 bg-red-100 px-1 rounded font-mono text-xs">${key}</span>`;
  });
};

const PreviewPane: React.FC<PreviewPaneProps> = ({ template, contractData, logo, onEditClause }) => {
  return (
    <div className="flex flex-col h-full">
        <div className="p-4 bg-slate-50 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800">Live Preview</h3>
        </div>
        <div id="contract-preview-content" className="prose prose-sm max-w-none p-8 overflow-y-auto flex-grow bg-white">
          {logo && (
            <div className="text-center mb-8">
              <img src={logo} alt="Company Logo" className="max-h-24 mx-auto" />
            </div>
          )}
          <h1 className="text-center text-2xl font-bold" dangerouslySetInnerHTML={{ __html: replacePlaceholders(template.name, contractData) }}></h1>
          
          <div className="mt-8 space-y-4">
            {template.clauses.map((clause) => (
              <div key={clause.id} className="group relative p-2 -m-2 rounded-md hover:bg-blue-50/70 transition-colors break-inside-avoid">
                <h2 className="font-bold text-base" dangerouslySetInnerHTML={{ __html: replacePlaceholders(clause.title, contractData) }}></h2>
                <div className="text-slate-600" dangerouslySetInnerHTML={{ __html: replacePlaceholders(clause.content, contractData) }}></div>
                <button
                  onClick={() => onEditClause(clause)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white border border-slate-300 rounded-md p-1.5 hover:bg-slate-100 text-slate-600 shadow-sm"
                  aria-label={`Edit clause: ${clause.title}`}
                >
                  <PencilIcon className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default PreviewPane;
