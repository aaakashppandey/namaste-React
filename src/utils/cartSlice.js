import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: "cart",
    initialState: {
      items: [],
    },
    reducers: {
      addItems: (state, action) => {
        //Rdux-toolikt uses emmer behind the scene sto update the immutable o ject.
        //Mutating the state. 
        state.items.push(action.payload);
      },
      // You can write your code here to dlete the particular items from the cart
      deleteItems: (state, action) => {
        state.items.pop();
      },
      clearCart: (state, action) => {
        state.items.length = 0;
      },
    },
})
// We will export each actions separately.
export const{addItems, deleteItems, clearCart}=cartSlice.actions;
// we will export the reducer
export default cartSlice.reducer;