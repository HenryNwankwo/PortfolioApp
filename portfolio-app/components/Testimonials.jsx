const Testimonials = ({ source_Serif_4 }) => {
  return (
    <>
      {/* Testimonial section */}
      <section id='testimonials' className='w-full min-h-90'>
        <div></div>
        <div>
          <h2 className={source_Serif_4.className}>Testimonial</h2>
          <div>
            <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dignissimos sunt itaque ut veniam, repudiandae distinctio
              deleniti, ipsum id porro doloribus laudantium nisi nobis nostrum
              labore. Saepe sed aperiam minima.
            </p>
            <h6 className='font-bold'>Josef Sharon</h6>
            <div className='flex items-center'>
              <span className='block w-7 h-1 bg-green-500 dark:bg-orange-400'></span>
              <p>CEO, Omisoft</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
