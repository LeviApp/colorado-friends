import logo from './logo.svg';
import './SASS/app.sass';

import {Route, Redirect} from 'react-router-dom';

// COMPONENTS IMPORT
import Nav from './components/Nav'
import Founder from './components/Founder';
import About from './components/About';
import Mission from './components/Mission';
import Team from './components/Team';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" render={(props) =>  <Redirect to="/founder" />} />
      <Route exact path="/founder" render={(props) =>  <Founder />} />
      <Route exact path="/about" render={(props) =>  <About />} />
      <Route exact path="/mission" render={(props) =>  <Mission />} />
      <Route exact path="/team" render={(props) =>  <Team />} />
      <Footer />
    </div>
  );
}

export default App;
