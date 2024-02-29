import './Footer.css';
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
import Blur from '../Blur/Blur';

const Footer = () => {
  return (
    <div className='footer-container'>
      <hr />
      <footer className="footer">
        <div className="social-links">
          <img src={github} alt="github-logo" />
          <img src={instagram} alt="instargam-logo" />
          <img src={linkedin} alt="linkedin-logo" />
        </div>
        <div className="footer-logo">
          <img src={logo} alt="gym-logo" />
        </div>
      </footer>
      <Blur className={'footer-blur-right-side'} />
      <Blur className={'footer-blur-left-side'} />
    </div>
  )
}

export default Footer