// src/components/InputField.jsx
import React from 'react';
import { useField } from 'formik';

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      <label htmlFor={props.id || props.name} className="block mb-1 font-medium">{label}</label>
      <input
        className={`w-full px-3 py-2 border rounded ${
          meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default InputField;
