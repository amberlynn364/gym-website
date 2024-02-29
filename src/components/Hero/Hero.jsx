import Blur from '../Blur/Blur';
import './Hero.css';
import HeroLeftSide from './HeroLeftSide/HeroLeftSide';
import HeroRightSide from './HeroRightSide/HeroRightSide';

const Hero = () => {
  return (
    <section className="hero">
      <Blur className={'hero-blur'} />
      <HeroLeftSide />
      <HeroRightSide />
    </section>
  )
}

export default Hero;