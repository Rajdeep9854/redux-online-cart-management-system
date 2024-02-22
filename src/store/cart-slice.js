import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalPrice: 0,
        totalQuantity: 0
    },

    reducers: {
        addToCart(state, action) {


            const newItem = action.payload;
            let existingItem = state.items.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.totalQuantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            } else {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    description: newItem.description,
                    price: newItem.price,
                    totalQuantity: 1,
                    totalPrice: newItem.price
                })

            }


            state.totalQuantity++;
            state.totalPrice = state.totalPrice + newItem.price;
            state.items.forEach(item => console.log(item))
        },
        removeFromCart(state, action) {

            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            state.totalQuantity--;
            //const indexOfItem = state.items.findIndex(item => item.id === id)

            if (existingItem.totalQuantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            }
            else {
                existingItem.totalQuantity--;
                existingItem.totalPrice-=existingItem.price
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice

