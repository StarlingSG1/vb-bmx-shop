import axios from "axios";

export async function selfUserUpdate(body) {
    const response = await axios.post(
        `http://localhost:8080/api/users/update`, body
    );
    return response.data;
}

export async function selfPasswordUpdate(body) {
    const response = await axios.post(
        `http://localhost:8080/api/users/update-password`, body
    );
    return response.data;
}