import { useState } from 'react';
import './Header.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <header className="header">
      <HeaderLogo />
      {(!menuOpened && mobile) ? (
        <BurgerMenu setMenuOpened={setMenuOpened} />
      ) : (
        <HeaderMenu setMenuOpened={setMenuOpened} />
      )}
    </header>
  )
}

export default Header;