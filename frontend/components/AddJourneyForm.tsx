// Author: Jona Kaufmann

import React, { useState } from "react";
import axios from "axios";
import { createJourney } from "@/services/journeyService";
import Journey from "./Journey";

const AddJourneyForm: React.FC = () => {
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guide, setGuide] = useState("");
  const [cities, setCities] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const citiesArray = cities.split(",").map((city) => {
      const [name, days] = city.trim().split("(");
      return {
        name: name.trim(),
        days: parseInt(days),
      };
    });

    const journey = {
      country: country,
      startDate: startDate,
      endDate: endDate,
      cities: citiesArray,
      guide: guide,
    };

    createJourney(journey);
    createJourney(journey)
      .then(() => {
        alert("Journey added successfully!");
        setCountry("");
        setStartDate("");
        setEndDate("");
        setGuide("");
        setCities("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add journey.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="guide">Guide:</label>
        <input
          type="text"
          id="guide"
          value={guide}
          onChange={(e) => setGuide(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cities">Cities (z.B., Berlin (2), Munich (5)):</label>
        <input
          type="text"
          id="cities"
          value={cities}
          onChange={(e) => setCities(e.target.value)}
        />
      </div>
      <button type="submit">ADD JOURNEY</button>
    </form>
  );
};

export default AddJourneyForm;
