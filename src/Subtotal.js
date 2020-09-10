import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  //tarea 1
  const [{ basket }, dispatch] = useStateValue();

  //sum the total price of the products
  function getBasketTotal(basket) {
    let sum = 0.0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].price;
    }
    return sum;
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2} //length of decimals
        value={getBasketTotal(basket)}
        //SUBTOTAL VALUE SUM OF ALL ITEMS in basket
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
