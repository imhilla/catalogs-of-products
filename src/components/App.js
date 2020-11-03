import React from 'react';
// import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './Products';
import PokemonView from './PokemonView'
import '../App.css';
import Pokemon from './pokemon';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Products />
          </Route>
          <Route path="/pokemon/:id" component={PokemonView}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
