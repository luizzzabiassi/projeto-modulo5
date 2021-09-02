import './Assets/App.css';
import './Assets/index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Create from './Components/Create/Create'
import Delete from './Components/Delete/Delete'
import Update from './Components/Update/Update';
import Drinks from './Components/Drinks/Drinks';
import Quemsomos from './Components/Corpo/Corpo.jsx'


function App(){
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/create" component={Create} />
      <Route path="/delete" component={Delete}/>
      <Route path="/update" component={Update}/>
      <Route path="/drinks" component={Drinks} exact />
      <Route path="/SobreNos" component={Quemsomos} exact/>
    </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
