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
  console.log(res)
}
const data = getData();
// console.log(typeof data)

const initialState = {
  // filter: 'All',
  products: [
    { id: 1, title: 'Mummies', category: 'Horror' },
    { id: 2, title: 'The Flash', category: 'Sci-Fi' },
  ],
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
