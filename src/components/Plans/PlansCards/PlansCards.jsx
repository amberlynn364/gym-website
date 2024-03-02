import './PlansCards.css';
import { plansData } from '../../../data/plansData.js';
import whiteTick from '../../../assets/whiteTick.png';

const PlansCards = () => {
  return (
    <div className="plans">
      {plansData.map(({ icon, name, price, features }, index) => (
        <Plan
          icon={icon}
          name={name}
          price={price}
          features={features}
          key={index}
        />
      ))}
    </div>
  )
}

const Plan = ({ icon, name, price, features }) => {
  return (
    <div className="plan">
      {icon}
      <span>{name}</span>
      <span>$ {price}</span>
      <div className="features">
        {features.map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </div>
      <div>
        <span>See more benefits -&gt;</span>
      </div>
      <button className="btn">Join now</button>
    </div>
  )
}

const Feature = ({ feature }) => {
  return (
    <div className="feature">
      <img src={whiteTick} alt="tick" />
      <span>{feature}</span>
    </div>
  )
}

export default PlansCards;