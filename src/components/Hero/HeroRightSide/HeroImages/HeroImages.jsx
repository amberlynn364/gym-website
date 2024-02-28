import './HeroImages.css';
import hero_image from '../../../../assets/hero_image.png'
import hero_image_back from '../../../../assets/hero_image_back.png';

const HeroImages = () => {
  return (
    <>
      <img src={hero_image} alt="" className='hero-image' />
      <img src={hero_image_back} alt="" className='hero-image-back' />
    </>
  )
}

export default HeroImages