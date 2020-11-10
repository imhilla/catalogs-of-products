import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import App from '../../App';
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
