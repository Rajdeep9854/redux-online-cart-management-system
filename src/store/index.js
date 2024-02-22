import { configureStore, createSlice } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";


// const initialCartState = {
//     items: [
//         {
//             itemName: '',
//             price: 0,
//             quantity: 0
//         }
//     ]
// }


/*const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart: (state, action) => {
            if (state.items.length == 0) {
                state.items[0].itemName = action.payload.title;
                state.items[0].price = action.payload.price;
                state.items[0].quantity = action.payload.quantity + 1
            }
            else {
                state.items[0].quantity++;
            }
        },
        increaseQuantity: (state, action) => {
            state.items[0].quantity++;
        },
        decreaseQuantity: (state, action) => {
            state.items[0].quantity--
        }
    }
})*/

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart : cartSlice.reducer
    }
})
//export const cartActions = cartSlice.actions;
export default store;