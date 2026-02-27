import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/api";
import Postlists from "./Postlists";

function TanStack(){
    const { data, isLoading}=useQuery({
        queryKey:["posts"],
        queryFn: fetchPosts
    })
    console.log(data,isLoading)
    return(
    <>
    <Postlists/>
    </>)
}

export default TanStack