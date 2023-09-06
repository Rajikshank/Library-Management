import axios from "axios";
import { User } from "./users";

const API_URL = import.meta.env.VITE_API_URL + "/users";
const SERVICE_URL = import.meta.env.VITE_API_URL + "/services/count";

export async function getAttendance() {
  const { data } = await axios.get<User[]>(`${API_URL}/attendance`);
  return data;
}

export async function getFaculties() {
  const { data } = await axios.get<{
    science: number;
    arts: number;
    management: number;
    medicine: number;
  }>(`${API_URL}/faculty`);
  return data;
}

export async function getServicesCount() {
  const { data } = await axios.get<
    Array<{
      service: string;
      count: number;
    }>
  >(SERVICE_URL);
  return data;
}
