const initialState = {
  filter: 'All',
  products: [],
}

function products(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export default products;
