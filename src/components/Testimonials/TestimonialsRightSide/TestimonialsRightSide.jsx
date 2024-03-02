import TestimonialAvatar from './TestimonialAvatar/TestimonialAvatar';
import TestimonialsArrows from './TestimonialsArrows/TestimonialsArrows';
import './TestimonialsRightSide.css';


const TestimonialsRightSide = ({ image, testimonialsLength, selected, setSelected }) => {
  return (
    <div className="right-t">
      <TestimonialAvatar image={image} selected={selected} />
      <TestimonialsArrows
        selected={selected}
        setSelected={setSelected}
        testimonialsLength={testimonialsLength}
      />
    </div>
  )
}

export default TestimonialsRightSide