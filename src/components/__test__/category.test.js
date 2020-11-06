import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../App';
import CategoryFilter from '../categoryFilter';

it('renders without crushing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoryFilter />, div);
});
