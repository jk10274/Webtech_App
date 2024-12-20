"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [journeys, setJourneys] = useState<Journey[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/journeys')
      .then(response => {
        setJourneys(response.data);
      })
      .catch(error => {
        console.error('Error fetching journeys:', error);
      });
  }, []);

  return (
    <div>
      <p>LANDING PAGE</p>
    </div>
  );
}