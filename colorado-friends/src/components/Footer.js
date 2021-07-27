import logo from '../images/coloradochildrenlogo.png';
import '../SASS/footer.sass';
import {NavLink} from 'react-router-dom'
function Footer() {
  return (
    <footer>
          <NavLink to='/founder' activeClassName="selected">Founder</NavLink>
          <NavLink to='/team' activeClassName="selected">Our Team</NavLink>
          <NavLink to='/mission' activeClassName="selected">Our Mission</NavLink>
          <NavLink to='/about' activeClassName="selected">About</NavLink>
    </footer>
  );
}

export default Footer;
