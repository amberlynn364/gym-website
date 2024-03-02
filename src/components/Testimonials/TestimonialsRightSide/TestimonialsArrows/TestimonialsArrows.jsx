import './TestimonialsArrows.css';
import leftArrow from '../../../../assets/leftArrow.png';
import rightArrow from '../../../../assets/rightArrow.png';

const TestimonialsArrows = ({ selected, setSelected, testimonialsLength }) => {
  return (
    <div className='arrows'>
      <img
        src={leftArrow}
        alt="left arrow"
        onClick={() => {
          selected === 0
            ? setSelected(testimonialsLength - 1)
            : setSelected((prev) => prev - 1);
        }}
      />
      <img
        src={rightArrow}
        alt="right arrow"
        onClick={() => {
          selected === testimonialsLength - 1
            ? setSelected(0)
            : setSelected((prev) => prev + 1)
        }}
      />
    </div>
  )
}

export default TestimonialsArrows