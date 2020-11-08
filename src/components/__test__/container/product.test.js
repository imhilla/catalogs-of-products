/* eslint-disable no-unused-expressions */
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Products from '../../../containers/Products';
import '../../../setupTests';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
const mock = new MockAdapter(axios);

beforeEach(() => {
  store.clearActions();
});

describe('test actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('Should get all data and store it in the store', () => {
    mock.onGet('/').reply(200, {
      data: [{
        results: {},
      }],
    });
  });
});
