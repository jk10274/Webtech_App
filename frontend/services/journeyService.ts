import axios from "axios";

const API_URL = "http://localhost:3000/api/journeys";

export const getJourneys = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching journeys:", error);
    throw error;
  }
};

export const getJourneyById = async (id: String) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching journey with id ${id}:`, error);
    throw error;
  }
};

export const updateJourney = async (id: String, journey: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, journey);
    return response.data;
  } catch (error) {
    console.error(`Error updating journey with id ${id}:`, error);
    throw error;
  }
};

export const createJourney = async (journey: any) => {
  try {
    const response = await axios.post(API_URL, journey);
    return response.data;
  } catch (error) {
    console.error("Error creating journey:", error);
    throw error;
  }
};

export const deleteJourney = async (id: String) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting journey with id ${id}:`, error);
    throw error;
  }
};
