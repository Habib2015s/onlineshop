import axios from "axios"


export const getProductID=async(id)=>{
    const data=await axios.get(`https://fakestoreapi.com/products/${id}`)
    return data
    
}
