import './Assets/App.css';
import './Assets/index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Drinks from './Components/Drinks/Drinks';
import Time from './Components/Time/Time';

function App() {
  return (
    <BrowserRouter>
    <Header />

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/drinks" component={Drinks} exact />
      <Route path="/NossoTime" component={Time} exact />
    </Switch>

    <Footer />
  </BrowserRouter>
  );
}

export default App;
