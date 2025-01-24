// Author: Jona Kaufmann

import axios from "axios";
import { Journey } from "../types";
const API_URL = "http://localhost:3000/api/journeys";

export const getAllJourneys = async () => {
  const token = localStorage.getItem("token");
  console.log("Token from localStorage:", token);

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching journeys:", error);
    throw error;
  }
};

export const getJourneyById = async (id: string) => {
  const token = localStorage.getItem("token");
  console.log("Token from localStorage:", token);

  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching journey by ID:", error);
    throw error;
  }
};

export const addJourney = async (journey: Omit<Journey, "_id">) => {
  const token = localStorage.getItem("token");
  console.log("Token from localStorage:", token);

  try {
    const response = await axios.post(API_URL, journey, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding journey:", error);
    throw error;
  }
};

export const updateJourney = async (id: string, updatedJourney: Partial<Journey>) => {
  const token = localStorage.getItem("token");
  console.log("Token from localStorage:", token);

  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedJourney, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating journey:", error);
    throw error;
  }
};

export const deleteJourney = async (id: string) => {
  const token = localStorage.getItem("token");
  console.log("Token from localStorage:", token);

  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting journey:", error);
    throw error;
  }
};
