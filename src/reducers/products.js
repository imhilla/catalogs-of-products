import axios from 'axios';
const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/ability/?limit=20&offset=20`
})
const initialState = {
  products: [{

  }]
}

function products (state= initialState, action){
console.log('new')
}
export default products;