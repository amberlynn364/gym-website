import './ReasonsPartners.css';
import nb from '../../../../assets/nb.png';
import adidas from '../../../../assets/adidas.png';
import nike from '../../../../assets/nike.png';

const ReasonsPartners = () => {
  return (
    <>
      <span style={{
        color: 'var(--gray)',
        fontWeight: 'normal'
      }}>OUR PARTNERS</span>
      <div className="partners">
        <img src={nb} alt="nb" />
        <img src={adidas} alt="adidas" />
        <img src={nike} alt="nike" />
      </div>
    </>
  )
}

export default ReasonsPartners