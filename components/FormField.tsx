import React from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, ...props }) => {
  return (
    <div>
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        {...props}
        id={props.id || props.name}
        className="block w-full rounded-md border border-slate-300 bg-white shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm h-10 px-3 text-gray-900 placeholder:text-slate-400"
      />
    </div>
  );
};

export default FormField;