import './HeartRate.css';
import Heart from '../../assets/heart.png';


const HeartRate = () => {
  return (
    <div className='heart-rate'>
      <img src={Heart} alt="heart" />
      <span>Heart rate</span>
      <span>116 bpm</span>
    </div>
  )
}

export default HeartRate