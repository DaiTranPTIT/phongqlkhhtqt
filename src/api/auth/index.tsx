import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function loginApi(username: string, password: string) {
  try {
    const res = await axios.post(
      `${API_URL}/api/authentication/token`,
      new URLSearchParams({
        username: username,
        password: password,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.detail || "Login failed"
    );
  }
}

export async function registerApi(
  username: string,
  email: string,
  password: string
) {
  try {
    const res = await axios.post(
      `${API_URL}/api/authentication/register`,
      { username, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.detail || "Register failed"
    );
  }
}
