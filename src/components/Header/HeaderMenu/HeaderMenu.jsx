import './HeaderMenu.css';
import { Link } from 'react-scroll';

const HeaderMenu = ({ setMenuOpened }) => {
  const handleCloseBurger = () => setMenuOpened(false);
  return (
    <ul className='header-menu'>
      <li>
        <Link
          onClick={handleCloseBurger}
          to='home'
          span={true}
          smooth={true}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={handleCloseBurger}
          to='programs'
          span={true}
          smooth={true}
        >
          Programs
        </Link>
      </li>
      <li>
        <Link
          onClick={handleCloseBurger}
          to='reasons'
          span={true}
          smooth={true}
        >
          Why Us
        </Link>
      </li>
      <li>
        <Link
          onClick={handleCloseBurger}
          to='plans'
          span={true}
          smooth={true}
        >
          Plans
        </Link>
      </li>
      <li>
        <Link
          onClick={handleCloseBurger}
          to='testimonials'
          span={true}
          smooth={true}
        >
          Testimonials
        </Link>
      </li>
    </ul>
  )
}

export default HeaderMenu