import './Plans.css';
import PlansCards from './PlansCards/PlansCards.jsx';

import PlansHeader from './PlansHeader/PlansHeader.jsx';

const Plans = () => {
  return (
    <section className='plans-section'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <PlansHeader />
      <PlansCards />
    </section>
  )
}

export default Plans;