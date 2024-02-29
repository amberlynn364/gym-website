import './HeroImages.css';
import hero_image from '../../../../assets/hero_image.png'
import hero_image_back from '../../../../assets/hero_image_back.png';
import { motion } from 'framer-motion';
import { TRANSITION } from '../../../../constants/constants';

const HeroImages = () => {
  return (
    <>
      <img src={hero_image} alt="hero" className='hero-image' />
      <motion.img
        initial={{ right: '11rem' }}
        whileInView={{ right: '20rem' }}
        transition={TRANSITION}
        src={hero_image_back}
        alt="hero-back"
        className='hero-image-back'
      />
    </>
  )
}

export default HeroImages