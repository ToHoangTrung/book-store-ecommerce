import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from "./Material/Feature/CatalogSlice";
import productReducer from "./Material/Feature/ProductSlice";
import userReducer from "./Material/Feature/UserSlice";
import cartReducer from "./Material/Feature/CartSlice";
import paymentReducer from "./Material/Feature/PaymentSlice";

export default configureStore({
    reducer: {
        catalog: catalogReducer,
        product: productReducer,
        user: userReducer,
        cart: cartReducer,
        payment: paymentReducer,
    },
})
