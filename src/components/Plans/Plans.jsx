import './Plans.css';
import PlansCards from './PlansCards/PlansCards.jsx';

import PlansHeader from './PlansHeader/PlansHeader.jsx';

const Plans = () => {
  return (
    <section className='plans-section'>
      <PlansHeader />
      <PlansCards />
    </section>
  )
}

export default Plans;