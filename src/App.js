import Navbar from './components/Navbar.js'
import Main from "./components/Main.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Portfolio from "./components/Portfolio.js"
import Footer from './components/Footer.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
  );
}

export default App;
