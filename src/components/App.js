import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './Home';
import About from './About';
import '../App.css';

function App() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
      </Route>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
        {/* {this.props.children} */}
      </div>
    </Router>

  );
}

export default App;
