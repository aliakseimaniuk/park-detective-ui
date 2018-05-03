// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

import Home from './Home';
import Park from './Park';
import Parks from './Parks';

const App = props => (
  <div id="wrapper">
    <Header {...props} />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/parks" component={Parks} />
        <Route exact path="/park/:id" component={Park} />
      </Switch>
    </main>
    <Footer />
    <BackToTopButton />
  </div>
);

export default App;
