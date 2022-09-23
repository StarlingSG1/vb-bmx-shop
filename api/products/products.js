import axios from "axios";

export async function getAllFrom(item) {
    const response = await axios.get(
        `http://localhost:8080/api/${item}/`
    );
    return response.data;
}

export async function getOneFrom(item, id) {
    const response = await axios.get(
        `http://localhost:8080/api/${item}/${id}`
    );
    return response.data;
}

export async function getOneFromBody(item, body) {
    const response = await axios.post(
        `http://localhost:8080/api/${item}/`, body
    );
    return response.data;
}