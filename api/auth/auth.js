import axios from "axios";

export async function loginUser(payload) {
    const response = await axios.post(
        `http://localhost:8080/api/auth/login`,
        payload
    );
    console.log(response.data)
    return response.data;
}

export async function verifyToken() {
    const token = localStorage.getItem("vb-bmx-token");
    if (!token) {
        return false;
    }
    const response = await axios.get(`http://localhost:8080/api/auth/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}   