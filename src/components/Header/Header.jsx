import './Header.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const Header = () => {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderMenu />
    </header>
  )
}

export default Header;