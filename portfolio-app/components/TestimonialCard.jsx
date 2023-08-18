'use client';

import { useState } from 'react';
import TestimonialItem from './TestimonialItem';
import { testimonialItems } from '@/app/content';

const TestimonialCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={{ transform: `translate:(-${activeIndex * 100})` }}>
      {testimonialItems.map((item) => (
        <TestimonialItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TestimonialCard;
