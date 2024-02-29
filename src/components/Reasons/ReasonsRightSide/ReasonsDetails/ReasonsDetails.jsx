import './ReasonsDetails.css';
import tick from '../../../../assets/tick.png';


const ReasonsDetails = () => {
  return (
    <div className='reasons-details'>
      <div>
        <img src={tick} alt="" />
        <span>OVER 140+ EXPERT COACHS</span>
      </div>
      <div>
        <img src={tick} alt="" />
        <span>TRAIN SMARTER AND FASTER BEFORE</span>
      </div>
      <div>
        <img src={tick} alt="" />
        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
      </div>
      <div>
        <img src={tick} alt="" />
        <span>RELIABLE PARTNERS</span>
      </div>
    </div>
  )
}

export default ReasonsDetails