import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function getUserInfoApi(token: string) {
  if (!token) throw new Error("No token provided");

  try {
    const res = await axios.get(`${API_URL}/api/user_info_posts/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || "Fetch user info failed");
  }
}