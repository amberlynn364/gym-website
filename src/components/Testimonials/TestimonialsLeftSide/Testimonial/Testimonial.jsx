import { TRANSITION } from '../../../../constants/constants';
import './Testimonial.css';
import { motion } from 'framer-motion';

const Testimonial = ({ review, name, status, selected }) => {
  return (
    <>
      <motion.span
        key={selected}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={TRANSITION}
      >
        {review}
      </motion.span>
      <span>
        <span style={{ color: 'var(--orange)' }}>
          {name}
        </span>
        <span>{" "}
          - {status}
        </span>
      </span>
    </>
  )
}

export default Testimonial