import React from 'react';
import './assets/css/bootstrap.css'
import './assets/css/style.css'

import Header from './components/Header'
import Footer from './components/Footer'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import People from './pages/People';
import Films from './pages/Films';
import Species from './pages/Species';
import Planets from './pages/Planets';
import Login from './pages/Login';
import Starships from './pages/Starships';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/films" component={Films} />
          <Route path="/people" component={People} />
          <Route path="/login" component={Login} />
          <Route path="/planets" component={Planets} />
          <Route path="/species" component={Species} />
          <Route path="/starships" component={Starships} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
