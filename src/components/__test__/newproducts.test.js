import React from 'react';
import ReactDOM from 'react-dom';
import NewProducts from '../NewProducts';

it('renders without crushing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewProducts />, div);
});
