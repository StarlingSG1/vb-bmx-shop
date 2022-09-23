import axios from 'axios'


export async function orderPanier(id,payload){
    const response = await axios.post(`http://localhost:8080/api/order/create-checkout-session/${id}`, payload)
    return response.data
}   