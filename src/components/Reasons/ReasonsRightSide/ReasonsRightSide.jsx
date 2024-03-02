import './ReasonsRightSide.css';

import ReasonsTitle from './ReasonsTitle/ReasonsTitle';
import ReasonsDetails from './ReasonsDetails/ReasonsDetails';
import ReasonsPartners from './ReasonsPartners/ReasonsPartners';

const ReasonsRightSide = () => {
  return (
    <div className="right-side-reasons">
      <ReasonsTitle />
      <ReasonsDetails />
      <ReasonsPartners />
    </div>
  )
}

export default ReasonsRightSide