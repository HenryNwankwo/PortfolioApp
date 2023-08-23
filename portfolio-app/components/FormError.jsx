const FormError = ({ children }) => {
  return (
    <>
      <p className='text-xs px-2 mt-0.5 text-red-500'>{children}</p>
    </>
  );
};

export default FormError;
