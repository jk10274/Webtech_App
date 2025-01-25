// Author: Jona Kaufmann

import axios from "axios";

const API_URL = "http://localhost:3000/auth/signin";

export const signIn = async (username: string, password: string) => {
  try {
    const response = await axios.post(API_URL, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return { error: "Invalid credentials" };
    }
    console.error(error);
    return { error: "An unexpected error occurred" };
  }
};
