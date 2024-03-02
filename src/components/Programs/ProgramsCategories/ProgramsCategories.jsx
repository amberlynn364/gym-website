import './ProgramsCategories.css';
import { programsData } from '../../../data/programsData';
import RightArrow from '../../../assets/rightArrow.png';


const ProgramsCategories = () => {
  return (
    <div className='programs-categories'>
      {
        programsData.map(({ image, heading, details }, index) =>
          <Category key={index}
            image={image}
            heading={heading}
            details={details}
          />)
      }
    </div>
  )
}

const Category = ({ image, heading, details }) => {
  return (
    <div className="category">
      {image}
      <span>{heading}</span>
      <span>{details}</span>
      <div className="join-now">
        <span>Join Now</span>
        <img src={RightArrow} alt="right arrow" />
      </div>
    </div>
  )
}

export default ProgramsCategories