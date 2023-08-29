'use client';
import { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BsSendFill } from 'react-icons/bs';
import FormError from './FormError';
import ClipLoader from 'react-spinners/ClipLoader';
import { usePtfContext } from '@/utils/PtfContext';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const { theme } = usePtfContext();
  const contactFormRef = useRef(null);

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
    onSubmit: (values, onSubmitProps) => {
      emailjs
        .sendForm(
          process.env.SERVICE_ID, //YOUR_SERVICE_ID
          process.env.TEMPLATE_ID, //YOUR_TEMPLATE_ID
          contactFormRef.current,
          process.env.PUBLIC_KEY //YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            if (result.status == 200) {
              toast.success('Email sent successfully!', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: theme,
              });
              onSubmitProps.setSubmitting(false);
              onSubmitProps.resetForm();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });
  return (
    <>
      <form
        className='w-full flex flex-col items-center justify-center py-4 px-2 gap-1.5 sm:ml-8'
        onSubmit={formik.handleSubmit}
        ref={contactFormRef}
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
            className='mx-auto text-white text-sm py-3 px-4 dark:text-black rounded-full bg-gradient-to-br from-green-500 dark:from-orange-500 dark:hover:from-orange-400 to-blue-400 dark:to-yellow-300 dark:hover:to-yellow-200 hover:from-blue-400 hover:to-blue-300 h-10 w-full sm:w-44 flex justify-center items-center dark:text-medium sm:mr-0'
            disabled={!formik.isValid && formik.isSubmitting}
          >
            {formik.isSubmitting == true ? (
              <ClipLoader
                color={theme === 'light' ? '#ffffff' : '#555555'}
                loading
                size={15}
                aria-label='Loading Spinner'
                data-testid='loader'
              />
            ) : (
              <>
                Send Message <BsSendFill className='ml-2 text-xl' />
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
