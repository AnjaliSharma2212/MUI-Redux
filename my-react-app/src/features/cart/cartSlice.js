import { createSelector, createSlice } from "@reduxjs/toolkit";

 const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const existing= state.items.find(
                (item)=> item.id === action.payload.id
            );
            if(existing){
                existing.quantity+=1
            }else{
             state.items.push({...action.payload, quantity:1})
            }
        },
        removeFromCart:(state,action)=>{
            state.items= state.items.filter(
               (item)=> item.id !== action.payload
            );
        },
      increaseQty:(state,action)=>{
        const item= state.items.find(
            (item)=> item.id === action.payload
        );
        if(item) item.quantity+=1
      },
      decreaseOty:(state,action)=>{
        const item= state.items.find(
            (item)=> item.id === action.payload
        );
        if(item && item.quantity>1) item.quantity-=1
      },
      clearCart:(state)=>{
        state.items=[]
      }
    }
})

export const {addToCart, removeFromCart, increaseQty, decreaseOty, clearCart} = cartSlice.actions

export const selectTotal= createSelector(
    [(state)=> state.cart.items],
    (items)=>
        items.reduce((total, item)=> total + item.price * item.quantity,0)
)

export default cartSlice.reducer;