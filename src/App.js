<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import './Assets/App.css';
import './Assets/index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Drinks from './Components/Drinks/Drinks';
import Quemsomos from './Components/Corpo/Corpo.jsx'

function App() {
  return (
    <BrowserRouter>
    <Header />

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/drinks" component={Drinks} exact />
      <Route path="/SobreNos" component={Quemsomos} exact/>
    </Switch>

    <Footer />
  </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
