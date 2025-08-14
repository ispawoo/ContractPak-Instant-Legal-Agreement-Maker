
import React, { useState, useCallback } from 'react';
import { Clause } from '../types';
import { rewriteClause } from '../services/geminiService';
import Modal from './Modal';
import Button from './Button';
import { SparklesIcon } from './icons/SparklesIcon';

interface ClauseEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  clause: Clause;
  onSave: (updatedClause: Clause) => void;
}

const ClauseEditorModal: React.FC<ClauseEditorModalProps> = ({ isOpen, onClose, clause, onSave }) => {
  const [prompt, setPrompt] = useState<string>('Make this less formal');
  const [editedContent, setEditedContent] = useState<string>(clause.content);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const rewrittenText = await rewriteClause(clause.content, prompt);
      setEditedContent(rewrittenText);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    onSave({ ...clause, content: editedContent });
  };
  
  const quickPrompts = [
    "Make this less formal",
    "Add a late payment penalty of 1.5% per month",
    "Adjust for a 3-month term",
    "Make this more strict and formal"
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Edit Clause: ${clause.title}`}>
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">Original Clause</h4>
          <p className="text-sm p-3 bg-slate-100 rounded-md border border-slate-200 text-slate-600">{clause.content}</p>
        </div>

        <div>
          <label htmlFor="ai-prompt" className="block text-sm font-medium text-slate-700 mb-1">
            How should we change it?
          </label>
          <input
            id="ai-prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="block w-full rounded-md border border-slate-300 bg-white shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm h-10 px-3 text-gray-900 placeholder:text-slate-400"
            placeholder="e.g., Make this less formal"
          />
           <div className="flex flex-wrap gap-2 mt-2">
            {quickPrompts.map(p => (
              <button key={p} onClick={() => setPrompt(p)} className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-200 px-2 py-1 rounded-full transition-colors">
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button onClick={handleGenerate} disabled={isLoading}>
            <SparklesIcon className="mr-2 h-5 w-5" />
            {isLoading ? 'Generating...' : 'Rewrite with AI'}
          </Button>
        </div>
        
        {error && <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</p>}

        <div>
          <h4 className="font-semibold text-slate-800 mb-2">AI-Powered Suggestion</h4>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            rows={6}
            className="block w-full rounded-md border border-slate-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 bg-green-50/50 text-gray-900"
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave}>Accept & Save</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ClauseEditorModal;