import Navbar from './components/Navbar.jsx';
import LandingPage from "./components/LandingPage.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <LandingPage />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
  );
}

export default App;
