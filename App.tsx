
import React, { useState } from 'react';
import { ContractTemplate } from './types';
import { TEMPLATES } from './constants';
import Header from './components/Header';
import TemplateSelector from './components/TemplateSelector';
import ContractEditor from './components/ContractEditor';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);

  const handleTemplateSelect = (template: ContractTemplate) => {
    // Create a deep copy to prevent modifying the original constant
    setSelectedTemplate(JSON.parse(JSON.stringify(template)));
  };

  const handleBack = () => {
    setSelectedTemplate(null);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedTemplate ? (
          <ContractEditor 
            template={selectedTemplate} 
            onBack={handleBack} 
            onTemplateChange={setSelectedTemplate} 
          />
        ) : (
          <TemplateSelector templates={TEMPLATES} onSelect={handleTemplateSelect} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
