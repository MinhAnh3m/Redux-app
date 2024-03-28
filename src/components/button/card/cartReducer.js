import { createAction, createReducer } from "@reduxjs/toolkit";

// reducers/cartReducer.js
const initialState = {
  items: [],
};

export const addToCart = createAction('Add_To_Cart');

export const updateCart = createAction('Update_Cart');

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     default:
//       return state;
//   }
// };

const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.items.push(action.payload);
    console.log('asa');
  });
  builder.addCase(updateCart, (state, action) => {
    state.items.push(action.payload);
    console.log('asa');
  });
});

export default cartReducer;
