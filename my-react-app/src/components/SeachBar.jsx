import {useDispatch} from "react-redux"
import { setSearch } from "../features/filters/filterSlice"

const SearchBar=()=>{
    const dispatch= useDispatch()
    return(
        <input className="p-2 m-3 w-90 border-none items-center bg-gray-300 rounded-lg" 
        type="search"
        placeholder="search products" 
        onChange={(e)=> dispatch(setSearch(e.target.value))}
        
        />
    )
}

export default SearchBar