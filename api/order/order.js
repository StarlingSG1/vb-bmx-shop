import axios from 'axios'


export async function orderPanier(id,payload){
    const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/order/create-checkout-session/${id}`, payload)
    return response.data
}   