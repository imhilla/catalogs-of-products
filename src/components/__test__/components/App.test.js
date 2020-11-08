import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
// import Products from 'src/containers/Products';
import App from '../../App';
// import 'src/setupTests';

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

// describe('test of paths', () => {
//   test('valid path should redirect to products', () => {
//     const wrapper = mount(
//       <MemoryRouter initialEntries={['/']}>
//         <Provider store={store}>
//           <Products />
//         </Provider>

//       </MemoryRouter>,
//     );
//     expect(wrapper.find(Products).toHaveLength(1);
//   });

//   test('valid path should redirect to mission id,', () => {
//     const wrapper = mount(
//       <MemoryRouter initialEntries={['/mission/1']}>
//         <Provider store={store}>
//           <Mission match={{ params: { ID: 1 } }} />
//         </Provider>
//       </MemoryRouter>,
//     );

//     expect(wrapper.find(Mission)).toHaveLength(1);
//   });
// });
