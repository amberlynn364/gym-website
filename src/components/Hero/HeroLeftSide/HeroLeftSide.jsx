import GymAd from '../../GymAd/GymAd';
import Header from '../../Header/Header';
import HeroButtons from './HeroButtons/HeroButtons';
import HeroFigures from './HeroFigures/HeroFigures';
import HeroText from './HeroText/HeroText';
import './HeroLeftSide.css';

const HeroLeftSide = () => {
  return (
    <div className="left-side">
      <Header />
      <GymAd />
      <HeroText />
      <HeroFigures />
      <HeroButtons />
    </div>
  )
}

export default HeroLeftSide