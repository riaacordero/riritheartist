import Navbar from './components/Navbar.jsx';
import Main from "./components/Main.js";
import About from "./components/About.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <About />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
  );
}

export default App;
