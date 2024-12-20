// Author: Jona Kaufmann

import React, { useEffect, useState } from "react";
import axios from "axios";
import { getJourneyById } from "@/services/journeyService";

interface JourneyProps {
  journeyId: number;
}

const Journey: React.FC<JourneyProps> = ({ journeyId }) => {
  const [journey, setJourney] = useState<Journey | null>(null);

  useEffect(() => {
    const fetchJourney = async () => {
      try {
        const journeyData = await getJourneyById(journeyId);
        setJourney(journeyData);
      } catch (error) {
        console.error("Error fetching journey:", error);
      }
    };

    fetchJourney();
  }, [journeyId]);

  if (!journey) return <div>Loading...</div>;

  return (
    <div>
      <p>
        <strong>Country:</strong> {journey.country.name}
      </p>
      <p>
        <strong>Start Date:</strong>{" "}
        {new Date(journey.startDate).toLocaleDateString()}
      </p>
      <p>
        <strong>End Date:</strong>{" "}
        {new Date(journey.endDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Guide:</strong> {journey.guide.name}
      </p>
      <h2>Cities</h2>
      <ul>
        {journey.cities.map((city, index) => (
          <li key={index}>
            {city.name} ({city.days} days)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journey;
