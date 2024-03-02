import './TestimonialAvatar.css';
import { motion } from 'framer-motion';
import { TRANSITION } from '../../../../constants/constants.js'

const TestimonialAvatar = ({ image, selected }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...TRANSITION, duration: 2 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...TRANSITION, duration: 2 }}
      />
      <motion.img
        key={selected}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={TRANSITION}
        src={image}
        alt="testimonials"
      />
    </>
  )
}

export default TestimonialAvatar