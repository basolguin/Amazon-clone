export const initialState = {
  //Comenzamos con una Basket vacía
  basket: [],
};

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

    //debemos tener nuestro default:
    default:
      return state;
  }
};

export default reducer;
