import './HeartRate.css';
import Heart from '../../assets/heart.png';
import { motion } from 'framer-motion';
import { TRANSITION } from '../../constants/constants';

const HeartRate = () => {
  return (
    <motion.div
      initial={{ right: '-1rem' }}
      whileInView={{ right: '4rem' }}
      transition={TRANSITION}
      className='heart-rate'
    >
      <img src={Heart} alt="heart" />
      <span>Heart rate</span>
      <span>116 bpm</span>
    </motion.div>
  )
}

export default HeartRate