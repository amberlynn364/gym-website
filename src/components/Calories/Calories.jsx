import './Calories.css';
import CaloriesImg from '../../assets/calories.png';
import { motion } from 'framer-motion';
import { TRANSITION } from '../../constants/constants';

const Calories = () => {

  return (
    <motion.div
      initial={{ right: '37rem' }}
      whileInView={{ right: '28rem' }}
      transition={TRANSITION}
      className="calories"
    >
      <img src={CaloriesImg} alt="" />
      <div>
        <span>Calories Burned</span>
        <span>220 kcal</span>
      </div>
    </motion.div>
  )
}

export default Calories