import Calories from '../../Calories/Calories';
import HeartRate from '../../HeartRate/HeartRate';
import HeroImages from './HeroImages/HeroImages';
import './HeroRightSide.css';

const HeroRightSide = () => {
  return (
    <div className="right-side">
      <button className='btn'>Join Now</button>
      <HeartRate />
      <HeroImages />
      <Calories />
    </div>
  )
}

export default HeroRightSide