'use client';

import TestimonialItem from './TestimonialItem';
import { usePtfContext } from '@/utils/PtfContext';

const TestimonialCard = () => {
  const { source_Serif_4, testimonialItems, activeIndex } = usePtfContext();

  return (
    <div
      className=' whitespace-nowrap transition-transform duration-300 '
      style={{ transform: `translate(-${activeIndex * 100}%)` }}
    >
      {testimonialItems.map((item) => (
        <TestimonialItem
          item={item}
          key={item.id}
          source_Serif_4={source_Serif_4}
          width={'100%'}
        />
      ))}
    </div>
  );
};

export default TestimonialCard;
