'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BsSendFill } from 'react-icons/bs';
import FormError from './FormError';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please your name is required!'),
      email: Yup.string()
        .email('Invalid email address!')
        .required('Email address is required!'),
      message: Yup.string()
        .required('You cannot send an empty message!')
        .min(10, 'Message must be above 10 characters!'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form
        className='w-full flex flex-col items-center justify-center py-4 px-2 gap-1.5 sm:ml-8'
        onSubmit={formik.handleSubmit}
      >
        <p className='text-center mb-4'>
          You can write me a
          <span className='mx-1 text-green-500 dark:text-orange-400'>
            quick
          </span>
          message
        </p>
        <div className='my-1.5 w-full'>
          <label htmlFor='name'></label>
          <input
            type='text'
            placeholder='Name'
            name='name'
            id='name'
            className='ptf-contact-input'
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <FormError>{formik.errors.name}</FormError>
          ) : null}
        </div>
        <div className='my-1.5 w-full'>
          <label htmlFor='email'></label>
          <input
            type='email'
            placeholder='Email'
            name='email'
            id='email'
            className='ptf-contact-input'
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <FormError>{formik.errors.email}</FormError>
          ) : null}
        </div>
        <div className='my-1.5 w-full'>
          <label htmlFor='message'></label>
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='10'
            className='px-4 py-2 rounded-2xl w-full bg-slate-100 dark:bg-slate-900 outline-none placeholder:text-sm focus:shadow focus:shadow-slate-100 dark:focus:shadow-slate-800 resize-none'
            placeholder='Type your message here!'
            {...formik.getFieldProps('message')}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <FormError>{formik.errors.message}</FormError>
          ) : null}
        </div>
        <div className='w-full'>
          <button
            type='submit'
            className='mx-auto text-white py-3 px-4 dark:text-black rounded-full bg-gradient-to-br from-green-500 dark:from-orange-500 dark:hover:from-orange-400 to-blue-400 dark:to-yellow-300 dark:hover:to-yellow-200 hover:from-blue-400 hover:to-blue-300 w-full sm:w-fit flex justify-center items-center dark:text-medium sm:mr-0'
          >
            Send Message <BsSendFill className='ml-2 text-xl' />
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
