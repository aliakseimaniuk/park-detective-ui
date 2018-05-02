// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import Park from './Park';

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/park/:id" component={Park} />
      </Switch>
    </main>
  </div>
);

export default App;
