import {Component} from 'react';
import './Assets/App.css';
import './Assets/index.css'


import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Content>
    <Switch>
      <Route path="/" component={Home} exact/>
    </Switch>
    </Content>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
