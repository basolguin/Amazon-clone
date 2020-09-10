import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

//Pasamos Props a Product
function Product({ id, title, image, price, rating }) {
  //dispatch is how we manipulate the data layer
  //state/basket of the global store
  const [{ basket }, dispatch] = useStateValue();

  //const {basket} para lo siguiente
  //vemos en la consola que se añaden los items dentro de basket[] de reducer.js
  console.log("this is the basket", basket);

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
