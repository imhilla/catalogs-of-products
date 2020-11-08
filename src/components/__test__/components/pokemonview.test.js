import React from 'react';
import ReactDOM from 'react-dom';
import PokemonView from '../../PokemonView';

describe('It renders four random pokemons', () => {
  test('renders four pokes', () => {
    const match = { params: 'testName', pokemon_id: 2 };
    // eslint-disable-next-line no-unused-vars
    const params = match;
    const div = document.createElement('div');
    ReactDOM.render(<PokemonView />, div);
    expect(div.querySelector('.available').textContent).toBe('Available');
  });
});

// describe('componentDidMount', () => {
//   it('should call fetchUsers function', () => {
//     const match = { params: 'testName' };
//     const params = match;
//     const fetchUserFn = jest.fn(params);
//     const wrapper = shallow(<PokemonView fetchUsers={fetchUserFn} />, {
//       disableLifecycleMethods: true
//     });
//     wrapper.instance().componentDidMount();
//     expect(fetchUserFn).toHaveBeenCalledTimes(1);
//   });
// });
