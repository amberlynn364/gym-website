import './Hero.css';
import HeroLeftSide from './HeroLeftSide/HeroLeftSide';
import HeroRightSide from './HeroRightSide/HeroRightSide';

const Hero = () => {
  return (
    <section className="hero">
      <HeroLeftSide />
      <HeroRightSide />
    </section>
  )
}

export default Hero;