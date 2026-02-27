import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
export const fetchProducts= createAsyncThunk(
    "products/fetchProducts",
    async ()=>{
        const res= await fetch("https://fakestoreapi.com/products")
      return res.json()
    }
)

const productSlice= createSlice({
    name:"products",
    initialState:{
        items:[],
        status:"idle",
        error:null
    },
reducers:{},
extraReducers:(builder)=>{
  builder
  .addCase(fetchProducts.pending,(state)=>{
      state.status="Loading..."
  })
  .addCase(fetchProducts.fulfilled,(state,action)=>{
    state.status="Succeeded"
    state.items=action.payload
  })
  .addCase(fetchProducts.rejected,(state, action)=>{
    state.status="failed"
    state.error=  action.error.message
  })
}
})

export default productSlice.reducer