import './HeaderMenu.css';

const HeaderMenu = ({ setMenuOpened }) => {
  return (
    <ul className='header-menu'>
      <li onClick={() => setMenuOpened(false)}>Home</li>
      <li onClick={() => setMenuOpened(false)}>Programs</li>
      <li onClick={() => setMenuOpened(false)}>Why us</li>
      <li onClick={() => setMenuOpened(false)}>Plans</li>
      <li onClick={() => setMenuOpened(false)}>Testimonials</li>
    </ul>
  )
}

export default HeaderMenu