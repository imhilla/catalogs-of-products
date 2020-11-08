import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { changeFilter } from '../../../actions/index';
import '../../../setupTests';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
});

describe('test actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('Should dispatches the correct action and payload when selecting category filter', () => {
    const expectedActions = [
      {
        payload: 'All',
        type: 'CHANGE_FILTER',
      },
    ];
    store.dispatch(changeFilter('All'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
