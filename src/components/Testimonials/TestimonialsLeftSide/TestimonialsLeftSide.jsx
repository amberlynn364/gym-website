import Testimonial from './Testimonial/Testimonial';
import TestimonialsHeader from './TestimonialsHeader/TestimonialsHeader';
import './TestimonialsLeftSide.css';

const TestimonialsLeftSide = ({ review, name, status, selected }) => {
  return (
    <div className="left-t">
      <TestimonialsHeader />
      <Testimonial
        review={review}
        name={name}
        status={status}
        selected={selected}
      />
    </div>
  )
}

export default TestimonialsLeftSide