import React, { useRef } from 'react';
import Button from './Button';

interface ImageUploadFieldProps {
  onLogoChange: (logoDataUrl: string | null) => void;
  logoPreview: string | null;
}

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({ onLogoChange, logoPreview }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onLogoChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    onLogoChange(null);
    if (fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  return (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Company Logo (Optional)
      </label>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-slate-200 rounded-md flex items-center justify-center overflow-hidden">
          {logoPreview ? (
            <img src={logoPreview} alt="Logo Preview" className="w-full h-full object-contain" />
          ) : (
            <span className="text-xs text-slate-500 text-center">No Logo</span>
          )}
        </div>
        <div className="flex-grow">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/png, image/jpeg, image/svg+xml"
            className="hidden"
            id="logo-upload"
          />
          <Button type="button" variant="secondary" onClick={() => fileInputRef.current?.click()}>
            Upload Logo
          </Button>
          {logoPreview && (
            <Button type="button" variant="ghost" onClick={handleRemoveLogo} className="ml-2 text-red-600">
              Remove
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploadField;
