import axios from "axios";

export async function loginUser(payload) {
    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/auth/login`,
        payload
    );
        return response.data;
}

export async function verifyToken() {
    const token = localStorage.getItem("vb-bmx-token");
    if (!token) {
        return false;
    }
    const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/auth/me`, {token: token}
    );
    return response.data;
}   

export async function logout()  {
    localStorage.removeItem("vb-bmx-token");
}

export async function registerUser(payload){
    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/auth/register`,
        payload
    );
    return response.data;
}