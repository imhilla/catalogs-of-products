import axios from 'axios';

function getData() {
  axios
    .all([
      axios.get('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
    ])
    .then(axios.spread((products) => showOutput(products)))
    .catch(err => console.error(err));
}

getData()

function showOutput(res) {
  console.log(res)
}

function products(state = [], action) {
  console.log('new')
}
export default products;