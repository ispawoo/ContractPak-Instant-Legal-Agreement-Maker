import React, { useState, useMemo, useCallback } from 'react';
import { ContractTemplate, Clause, ContractData } from '../types';
import FormField from './FormField';
import PreviewPane from './PreviewPane';
import ClauseEditorModal from './ClauseEditorModal';
import ImageUploadField from './ImageUploadField';
import { exportToPdf } from '../services/pdfService';
import Button from './Button';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { DownloadIcon } from './icons/DownloadIcon';
import { EyeIcon } from './icons/EyeIcon';

interface ContractEditorProps {
  template: ContractTemplate;
  onBack: () => void;
  onTemplateChange: (template: ContractTemplate) => void;
}

const extractPlaceholders = (template: ContractTemplate): string[] => {
  const allText = template.clauses.map(c => c.title + ' ' + c.content).join(' ');
  const placeholderRegex = /\{\{([A-Z_]+)\}\}/g;
  const matches = allText.match(placeholderRegex) || [];
  const uniquePlaceholders = [...new Set(matches.map(p => p.slice(2, -2)))];
  return uniquePlaceholders;
};

const formatLabel = (key: string) => key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

const ContractEditor: React.FC<ContractEditorProps> = ({ template, onBack, onTemplateChange }) => {
  const placeholders = useMemo(() => extractPlaceholders(template), [template]);
  
  const [contractData, setContractData] = useState<ContractData>(() => 
    placeholders.reduce((acc, key) => ({ ...acc, [key]: '' }), {})
  );
  
  const [logo, setLogo] = useState<string | null>(null);
  const [editingClause, setEditingClause] = useState<Clause | null>(null);

  const handleDataChange = (key: string, value: string) => {
    setContractData(prev => ({ ...prev, [key]: value }));
  };

  const handleClauseUpdate = useCallback((updatedClause: Clause) => {
    const newTemplate = {
      ...template,
      clauses: template.clauses.map(c => c.id === updatedClause.id ? updatedClause : c)
    };
    onTemplateChange(newTemplate);
    setEditingClause(null);
  }, [template, onTemplateChange]);
  
  const handleExport = () => {
    exportToPdf('contract-preview-content', `${template.name}.pdf`);
  };

  const yourDetailsKeys = placeholders.filter(p => p.includes('FREELANCER') || p.includes('PROVIDER') || p.includes('DISCLOSING_PARTY') || p.includes('BRAND'));
  const clientDetailsKeys = placeholders.filter(p => p.includes('CLIENT') || p.includes('RECEIVING_PARTY') || p.includes('INFLUENCER'));
  const contractDetailsKeys = placeholders.filter(p => !yourDetailsKeys.includes(p) && !clientDetailsKeys.includes(p));

  return (
    <div>
       <div className="flex items-center justify-between mb-6">
        <Button onClick={onBack} variant="outline">
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Templates
        </Button>
        <div className="flex items-center space-x-2">
            <Button variant="secondary" onClick={() => alert("Preview & Sign functionality coming soon!")}>
                <EyeIcon className="mr-2 h-4 w-4" /> Preview & Sign
            </Button>
            <Button onClick={handleExport}>
                <DownloadIcon className="mr-2 h-4 w-4" /> Export as PDF
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Form */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 overflow-y-auto max-h-[calc(100vh-12rem)]">
          <h2 className="text-2xl font-bold text-slate-900 mb-1">{template.name}</h2>
          <p className="text-slate-500 mb-6">Fill in the details below to customize your agreement.</p>
          <div className="space-y-8">
              <ImageUploadField onLogoChange={setLogo} logoPreview={logo} />

              {yourDetailsKeys.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b border-slate-200 pb-2">Your Details</h3>
                    {yourDetailsKeys.map(key => (
                      <FormField key={key} label={formatLabel(key)} value={contractData[key]} onChange={(e) => handleDataChange(key, e.target.value)} />
                    ))}
                </div>
              )}

              {clientDetailsKeys.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b border-slate-200 pb-2">Client / Other Party Details</h3>
                    {clientDetailsKeys.map(key => (
                      <FormField key={key} label={formatLabel(key)} value={contractData[key]} onChange={(e) => handleDataChange(key, e.target.value)} />
                    ))}
                </div>
              )}

              {contractDetailsKeys.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b border-slate-200 pb-2">Agreement Details</h3>
                    {contractDetailsKeys.map(key => (
                      <FormField key={key} label={formatLabel(key)} value={contractData[key]} onChange={(e) => handleDataChange(key, e.target.value)} />
                    ))}
                </div>
              )}
          </div>
        </div>

        {/* Right Side: Preview */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden h-full">
           <PreviewPane 
             template={template} 
             contractData={contractData}
             logo={logo}
             onEditClause={setEditingClause}
           />
        </div>
      </div>

      {editingClause && (
        <ClauseEditorModal
          clause={editingClause}
          isOpen={!!editingClause}
          onClose={() => setEditingClause(null)}
          onSave={handleClauseUpdate}
        />
      )}
    </div>
  );
};

export default ContractEditor;
