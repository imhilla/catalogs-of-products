import React from 'react';
import ReactDOM from 'react-dom';
import NewProducts from '../../NewProducts';

it('renders without crushing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewProducts />, div);
});

describe('It renders four random pokemons', () => {
  test('renders four pokes', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewProducts />, div);
    expect(div.querySelector('.new').textContent).toBe('NEW ARRIVALS');
  });
});
