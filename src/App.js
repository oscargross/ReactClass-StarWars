import React from 'react';
import './assets/css/bootstrap.css'
import './assets/css/style.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Produtos from './pages/Produtos'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/produtos" component={Produtos} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
