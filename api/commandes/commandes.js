import axios from "axios";

export async function getUserCommandes(userId) {
  const response = await axios.get(`http://localhost:8080/api/commandes/${userId}`);
    return response.data;

}