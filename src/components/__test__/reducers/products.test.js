import products from '../../../reducers/products';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'CHANGE_FILTER' };
    const initialState = { products: [] };

    expect(products(undefined, action)).toEqual(initialState);
  });
});
