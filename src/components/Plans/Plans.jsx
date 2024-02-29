import Blur from '../Blur/Blur.jsx';
import './Plans.css';
import PlansCards from './PlansCards/PlansCards.jsx';

import PlansHeader from './PlansHeader/PlansHeader.jsx';

const Plans = () => {
  return (
    <section className='plans-section'>
      <Blur className={'plans-blur-left-side'} />
      <Blur className={'plans-blur-right-side'} />
      <PlansHeader />
      <PlansCards />
    </section>
  )
}

export default Plans;