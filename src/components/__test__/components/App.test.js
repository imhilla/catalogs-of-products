import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../../App';
import PokemonView from '../../PokemonView';
import '../../../setupTests';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
});

describe('<App />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<App />);
      const component = wrapper.dive();
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});

describe('test of paths', () => {
  test('valid path should redirect to pokemon id,', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/pokemon/1']}>
        <Provider store={store}>
          <PokemonView match={{ params: { ID: 1 } }} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find(PokemonView)).toHaveLength(1);
  });
});
