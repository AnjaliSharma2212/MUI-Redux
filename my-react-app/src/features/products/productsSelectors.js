import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredProducts= createSelector(
    [
        (state)=> state.products.items,
        (state)=> state.filters.search
    ],
    (products, search)=>
        (products.filter((p)=> 
        p.title.toLowerCase().includes(search.toLowerCase())
))
)