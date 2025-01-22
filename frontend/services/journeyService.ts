// Author: Jona Kaufmann

import axios from "axios";
import { Journey } from "../types";

const API_URL = "http://localhost:3000/api/journeys";

export const getAllJourneys = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getJourneyById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addJourney = async (trip: Omit<Journey, "_id">) => {
  const response = await axios.post(API_URL, trip);
  return response.data;
};

export const updateJourney = async (id: string, trip: Omit<Journey, "_id">) => {
  const response = await axios.put(`${API_URL}/${id}`, trip);
  return response.data;
};

export const deleteJourney = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
