import axios from "axios";

export async function getAllFrom(item) {
    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/${item}/`
    );
    return response.data;
}

export async function getOneFrom(item, id) {
    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/${item}/${id}`
    );
    return response.data;
}

export async function getOneFromBody(item, body) {
    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/${item}/`, body
    );
    return response.data;
}