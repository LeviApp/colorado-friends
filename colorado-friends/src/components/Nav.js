import logo from '../images/coloradochildrenlogo.png';
import '../SASS/nav.sass';
import {NavLink} from 'react-router-dom'
function Nav() {
  return (
    <nav>
          <NavLink to='/founder' activeClassName="selected">Founder</NavLink>
          <NavLink to='/team' activeClassName="selected">Our Team</NavLink>
          <img src={logo}></img>

          <NavLink to='/mission' activeClassName="selected">Our Mission</NavLink>
          <NavLink to='/about' activeClassName="selected">About</NavLink>
    </nav>
  );
}

export default Nav;
