
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice";
import userReducer from "../reducers/userSlice";

const store = configureStore({

    reducer:{
        cart: cartReducer,
        user: userReducer,
    }
})

export default store;