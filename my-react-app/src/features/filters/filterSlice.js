import { createSlice } from "@reduxjs/toolkit";

const filterSlice= createSlice({
    name:"filters",
    initialState:{
        search:""
    },
    reducers:{
        setSearch:(state,action)=>{
            state.search= action.payload;
        }
    }
})

export const {setSearch}= filterSlice.actions
export default filterSlice.reducer