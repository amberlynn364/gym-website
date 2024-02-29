import './Reasons.css';


import ReasonsLeftSide from './ReasonsLeftSide/ReasonsLeftSide';
import ReasonsRightSide from './ReasonsRightSide/ReasonsRightSide';


const Reasons = () => {
  return (
    <section className='reasons' id='reasons'>
      <ReasonsLeftSide />
      <ReasonsRightSide />
    </section>
  )
}

export default Reasons