import axios from 'axios'


export async function orderPanier(payload){
    const response = await axios.post(`http://localhost:8080/api/order/create-checkout-session`, payload)
    return response.data
}   