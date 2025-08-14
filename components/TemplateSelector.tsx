
import React from 'react';
import { ContractTemplate } from '../types';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import Button from './Button';

interface TemplateSelectorProps {
  templates: ContractTemplate[];
  onSelect: (template: ContractTemplate) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ templates, onSelect }) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Choose Your Agreement
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Start by selecting a professionally vetted template. You can customize every detail in the next step.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col p-6">
            <h3 className="text-lg font-semibold text-slate-800">{template.name}</h3>
            <p className="mt-2 text-sm text-slate-500 flex-grow">{template.description}</p>
            <div className="mt-6">
               <Button onClick={() => onSelect(template)} variant="secondary" className="w-full">
                Use Template <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
         <div className="bg-slate-100/80 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center p-6 text-center">
            <h3 className="text-lg font-semibold text-slate-700">More Templates Soon</h3>
            <p className="mt-2 text-sm text-slate-500">We're always adding new agreements. Influencer contracts, partnership agreements, and more are on the way.</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
