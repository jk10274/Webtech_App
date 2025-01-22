// Author: Jona Kaufmann

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./JourneysTable.module.css";
import { getAllJourneys } from "@/services/journeyService";
import { Journey } from "@/types";

const JourneysTable: React.FC = () => {
  const [journeys, setJourneys] = useState<Journey[]>([]);

  useEffect(() => {
    const fetchJourneys = async () => {
      const data = await getAllJourneys();
      setJourneys(data);
    };
    fetchJourneys();
  }, []);

  return (
    <div>
      <h1>Journeys</h1>
      <p>Click on the country to get details.</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Country</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {journeys.map((journey) => (
            <tr key={journey._id}>
              <td>{journey._id}</td>
              <td className="standard-link">
                <Link href={`/journeys/${journey._id}`}>
                  {journey.destinationCountry}
                </Link>
              </td>
              <td>{new Date(journey.startDate).toLocaleDateString()}</td>
              <td>{new Date(journey.endDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JourneysTable;
