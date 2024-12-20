// Author: Jona Kaufmann

"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [journeys, setJourneys] = useState<Journey[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/journeys")
      .then((response) => {
        setJourneys(response.data);
      })
      .catch((error) => {
        console.error("Error fetching journeys:", error);
      });
  }, []);

  return (
    <div>
      <h1>Manage Journeys</h1>
      <p>
        Use the "Add Journey" button to add your journeys on this page and
        manage them afterwards.
      </p>
    </div>
  );
}
