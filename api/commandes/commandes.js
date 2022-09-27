import axios from "axios";
import { getFormattedToken } from "../../helpers/getFormattedToken";

export async function getUserCommandes(userId) {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/commandes/${userId}`);
    return response.data;
}

export async function getAllCommandes() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/commandes/`);
    return response.data;
}

export async function updateCommandStatus(commandId, status) {
  const response = await axios.patch(`${process.env.NEXT_PUBLIC_LOCAL_BACK_URL}/commandes/${commandId}`, { status})
  return response.data;
}