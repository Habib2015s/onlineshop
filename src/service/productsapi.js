import axios from "axios"


export const getProductID=async(id)=>{
    const data=axios.get(`https://fakestoreapi.com/products/${id}`)
    return data
    
};
export async function getProductsById(ids) {
    const responses = await Promise.all(
        ids.map((id) => getProductID(id))
    );

    const data = responses.map((res) => res.data);

    return data;
}
