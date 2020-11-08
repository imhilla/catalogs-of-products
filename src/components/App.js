import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Products from '../containers/Products';
import PokemonView from './PokemonView';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="LowerNav">
            <Link to="/" className="lii">HOME</Link>
            <h2>SERVICES</h2>
            <h2>SUPPORT</h2>
            <h2>CONTACT</h2>
            <h2>CART</h2>
          </div>

          <ul>
            <li />
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/pokemon/:pokemon_id" component={PokemonView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
