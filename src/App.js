import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './Assets/App.css';
import './Assets/index.css'

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Create from './Components/Create/Create'
import Delete from './Components/Delete/Delete'
import Update from './Components/Update/Update';
import Drinks from './Components/Drinks/Drinks';
import Corpo from './Components/Corpo/Corpo.jsx';

function App(){
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path="/Drinks" component={Drinks}/>
      <Route path="/QuemSomos" component={Corpo}/>
      <Route path="/" component={Home} exact/>
      <Route path="/create" component={Create} />
      <Route path="/delete" component={Delete}/>
      <Route path="/update" component={Update}/>
      
    </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
