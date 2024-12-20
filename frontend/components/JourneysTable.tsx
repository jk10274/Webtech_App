import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const JourneysTable: React.FC = () => {
  const [journeys, setJourneys] = useState<Journey[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/journeys')
      .then(response => {
        setJourneys(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the journeys!', error);
      });
  }, []);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3000/api/journeys/${id}`)
      .then(() => {
        setJourneys(journeys.filter(journey => journey.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the journey!', error);
      });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Country</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Guide</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {journeys.map(journey => (
          <tr key={journey.id}>
            <td>{journey.id}</td>
            <td>{journey.country.name}</td>
            <td>{new Date(journey.startDate).toLocaleDateString()}</td>
            <td>{new Date(journey.endDate).toLocaleDateString()}</td>
            <td>{journey.guide.name}</td>
            <td>
              <ul>
                {journey.cities.map((city, index) => (
                  <li key={index}>
                    {city.name} ({city.days} days)
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <Link href={`/journeys/${journey.id}`}>
                Details
              </Link>
              <Link href={`/journeys/${journey.id}/edit`}>
                Edit
              </Link>
              <button onClick={() => handleDelete(journey.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JourneysTable;