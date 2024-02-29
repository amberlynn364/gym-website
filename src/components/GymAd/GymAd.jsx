import { TRANSITION } from '../../constants/constants';
import './GymAd.css';
import { motion } from 'framer-motion';

const GymAd = () => {

  return (
    <div className='gym-ad'>
      <motion.div
        initial={{ left: '180px' }}
        whileInView={{ left: '8px' }}
        transition={{ ...TRANSITION, type: 'tween' }}
      />
      <span>the best fitness experience</span>
    </div>
  )
}

export default GymAd