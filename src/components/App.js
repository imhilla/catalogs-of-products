import React from 'react';
import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; import Products from './products';
import axios from 'axios';
import '../App.css';

function App() {
  const [data, setData] = useState({ products: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=151',
      );
      console.log(result.data.results)
      setData(result.data);
    };

    fetchData();
  }, []);

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
        {/* <ul>
          {data.results.map(item => (
            <li key={item}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
