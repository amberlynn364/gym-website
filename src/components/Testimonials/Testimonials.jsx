import { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';

import './Testimonials.css';
import TestimonialsLeftSide from './TestimonialsLeftSide/TestimonialsLeftSide';
import TestimonialsRightSide from './TestimonialsRightSide/TestimonialsRightSide';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonialsLength = testimonialsData.length;
  const { review, name, status, image } = testimonialsData[selected];
  return (
    <section className='testiomonials' id='testimonials'>
      <TestimonialsLeftSide
        review={review}
        name={name}
        status={status}
        selected={selected}
      />
      <TestimonialsRightSide
        image={image}
        testimonialsLength={testimonialsLength}
        selected={selected}
        setSelected={setSelected}
      />
    </section>
  )
}

export default Testimonials