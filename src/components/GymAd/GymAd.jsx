import { TRANSITION } from '../../constants/constants';
import './GymAd.css';
import { motion } from 'framer-motion';

const GymAd = () => {
  const mobileTransition = window.innerWidth <= 768 ? true : false;
  return (
    <div className='gym-ad'>
      <motion.div
        initial={{ left: mobileTransition ? '135px' : '180px' }}
        whileInView={{ left: '8px' }}
        transition={{ ...TRANSITION, type: 'tween' }}
      />
      <span>the best fitness experience</span>
    </div>
  )
}

export default GymAd