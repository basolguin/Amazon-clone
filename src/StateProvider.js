import React, { createContext, useContext, useReducer } from "react";

//Prepara la capa_de_Datos
export const StateContext = createContext();

//Wrap (envuelve) our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull (sacar) information from the data layer
export const useStateValue = () => useContext(StateContext);
