import './Hero.css';
import HeroLeftSide from './HeroLeftSide/HeroLeftSide';
import HeroRightSide from './HeroRightSide/HeroRightSide';

const Hero = () => {
  return (
    <section className="hero">
      <div className="blur hero-blur"></div>
      <HeroLeftSide />
      <HeroRightSide />
    </section>
  )
}

export default Hero;