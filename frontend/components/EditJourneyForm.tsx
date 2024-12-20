// Author: Jona Kaufmann

import React, { useState, useEffect } from "react";
import axios from "axios";
import { updateJourney, getJourneyById } from "@/services/journeyService";

interface EditJourneyFormProps {
  journeyId: number;
}

const EditJourneyForm: React.FC<EditJourneyFormProps> = ({ journeyId }) => {
  const [formData, setFormData] = useState<Journey | null>(null);

  useEffect(() => {
    const fetchJourney = async () => {
      try {
        const journey = await getJourneyById(journeyId);
        setFormData(journey);
      } catch (error) {
        console.error("Error fetching journey:", error);
      }
    };

    fetchJourney();
  }, [journeyId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (!prevData) return null;
      if (name === "cities") {
        const citiesArray = value.split(",").map((city) => {
          const [cityName, days] = city.trim().split("(");
          return { name: cityName.trim(), days: parseInt(days) };
        });
        return { ...prevData, cities: citiesArray };
      }
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;
    try {
      console.log(`Ausgabe: ${JSON.stringify(formData.country)}`);
      await updateJourney(journeyId, formData);
      alert("Journey updated successfully!");
    } catch (error) {
      console.error("Error updating journey:", error);
      alert("Failed to update journey.");
    }
  };

  if (!formData) return <div>Loading...</div>;

  return (
    <form id="edit-journey-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country.name}
          onChange={(e) =>
            setFormData({ ...formData, country: { name: e.target.value } })
          }
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate.split("T")[0]}
          onChange={(e) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate.split("T")[0]}
          onChange={(e) =>
            setFormData({ ...formData, endDate: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="cities">Cities (e.g., Berlin (2), Munich (5)):</label>
        <input
          type="text"
          id="cities"
          name="cities"
          value={formData.cities
            .map((city) => `${city.name} (${city.days})`)
            .join(", ")}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="guide">Guide:</label>
        <input
          type="text"
          id="guide"
          name="guide"
          value={formData.guide.name}
          onChange={(e) =>
            setFormData({ ...formData, guide: { name: e.target.value } })
          }
        />
      </div>
      <button type="submit">UPDATE JOURNEY</button>
    </form>
  );
};

export default EditJourneyForm;
