import axios from "axios";
import { getFormattedToken } from "../../helpers/getFormattedToken";

export async function getUserCommandes(userId) {
  const response = await axios.get(`http://localhost:8080/api/commandes/${userId}`);
    return response.data;
}

export async function getAllCommandes() {
  const response = await axios.get(`http://localhost:8080/api/commandes/`);
    return response.data;
}

export async function updateCommandStatus(commandId, status) {
  const response = await axios.patch(`http://localhost:8080/api/commandes/${commandId}`, { status})
  return response.data;
}