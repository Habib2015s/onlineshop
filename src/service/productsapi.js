import axios from "axios"


export const getProduct=async()=>{
    const data=await axios.get("https://fakestoreapi.com/products")
    return data
    
}
