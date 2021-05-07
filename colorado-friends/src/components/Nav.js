import logo from '../images/coloradochildrenlogo.png';
import '../SASS/nav.sass';

function Nav() {
  return (
    <nav>
        <img src={logo}></img>
        <div>
            <a>Founder</a>
            <a>About</a>

        </div>
    </nav>
  );
}

export default Nav;
