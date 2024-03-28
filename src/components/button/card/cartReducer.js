import { createAction } from "@reduxjs/toolkit";

// reducers/cartReducer.js
const initialState = {
  items: [],
};

export const addToCart = createAction('Add_To_Cart')

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
