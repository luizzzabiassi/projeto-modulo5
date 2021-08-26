import './Assets/App.css';
import './Assets/index.css'


import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Create from './Components/Create/Create'

import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/Create" component={Create} />
    </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
