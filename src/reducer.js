export const initialState = {
  //Comenzamos con una Basket vacía
  basket: [],
  user: null,
};

// Selector (good practice)
// Distinto/Mejor Método para obtener la suma total
// export const getBasketTotal = (basket) =>
// basket?.reduce( ( amount, item ) => item.price + amount, 0);
//we add basket? as optional chaining when there is no objects
//itll know to not go into the function

//In order to write the Reducer-Crear reducer
//we have a state of the application and action (are you trying to add to the basket?,remove, update?)
const reducer = (state, action) => {
  //vemos en la consola que recibe tal accion al clickear add to basket
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    //debemos tener nuestro default:
    default:
      return state;
  }
};

export default reducer;
