import './BurgerMenu.css';
import bars from '../../assets/bars.png';

const BurgerMenu = ({ setMenuOpened }) => {
  return (
    <div className='burger-wrapper'>
      <img
        src={bars}
        alt=""
        className='bars'
        onClick={() => setMenuOpened(true)}
      />
    </div>
  )
}

export default BurgerMenu;