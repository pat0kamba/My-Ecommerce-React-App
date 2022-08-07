import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";

const store = configureStore(
    {
        reducer:{
            cart:cartSlice.reducer
        }
    }
   
);

export default store;