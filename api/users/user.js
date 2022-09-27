import axios from "axios";

export async function selfUserUpdate(body) {
    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/users/update`, body
    );
    return response.data;
}

export async function selfPasswordUpdate(body) {
    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/users/update-password`, body
    );
    return response.data;
}