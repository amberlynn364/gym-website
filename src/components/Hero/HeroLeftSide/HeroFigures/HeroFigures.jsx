import './HeroFigures.css';
import NumberCounter from 'number-counter';

const HeroFigures = () => {
  return (
    <div className="figures">
      <div>
        <span>
          <NumberCounter end={140} start={90} delay='4' preFix='+' />
        </span>
        <span>expert coaches</span>
      </div>
      <div>
        <span>
          <NumberCounter end={978} start={800} delay='4' preFix='+' />
        </span>
        <span>members joined</span>
      </div>
      <div>
        <span>
          <NumberCounter end={50} start={0} delay='4' preFix='+' />
        </span>
        <span>fitness programs</span>
      </div>
    </div>
  )
}

export default HeroFigures