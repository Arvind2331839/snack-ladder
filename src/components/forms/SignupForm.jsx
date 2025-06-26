// src/forms/SignupForm.jsx
import React from 'react';
import { Formik, Form } from 'formik';
import { signupValidationSchema } from '../validations/signupValidation';
import InputField from '../InputField';

const SignupForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form Submitted:', values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Signup Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField label="Name" name="name" type="text" />
            <InputField label="Email" name="email" type="email" />
            <InputField label="Password" name="password" type="password" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
