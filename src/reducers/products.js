import axios from 'axios';

function getData() {
  axios
    .all([
      axios.get('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
    ])
    .then(axios.spread((products) => showOutput(products)))
    .catch(err => console.error(err));
}

function showOutput(res) {
  return res
}
// const data = getData();
// console.log(data)

const initialState = {
  // filter: 'All',
  products: getData()
};

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








// getData()



// function products(state = [], action) {
//   console.log('new')
// }
