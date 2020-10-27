import React from 'react';
import { connect } from 'react-redux';

const Products = ({ products }) => {
  return (
    <div>
      <h1>Home...</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(changeFilter(category)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Products);
