import React from "react";
import { useParams } from "react-router-dom";

const PokemonView = ({ data }) => {
  const { productId } = useParams();
  console.log(data)
  // const product = data.find(p => p.id === Number(productId));
  // let productData;

  // if (product) {
  //   productData = (
  //     <div>
  //       <h3> {product.name} </h3>
  //       <p>{product.description}</p>
  //       <hr />
  //       <h4>{product.status}</h4>
  //     </div>
  //   );
  // } 

  return (
    <div>
      {/* <div>{productData}</div> */}
      <div>Hello world</div>
    </div>
  );
};

export default PokemonView;
