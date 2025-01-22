// Author: Jona Kaufmann

import React, { useState } from "react";

const JourneyForm = ({
  onSubmit,
}: {
  onSubmit: (journey: {
    destinationCountry: string;
    startDate: Date;
    endDate: Date;
    tourguide: string;
  }) => void;
}) => {
  const [destinationCountry, setDestinationCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tourguide, setTourguide] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!/^[a-zA-Z\s]+$/.test(destinationCountry)) {
      newErrors.destinationCountry = "Please just use letters.";
    }

    if (new Date(startDate) >= new Date(endDate)) {
      newErrors.endDate = "The end date must be after the start date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({
        destinationCountry,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        tourguide,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={destinationCountry}
        onChange={(e) => setDestinationCountry(e.target.value)}
        placeholder="Country"
        required
      />
      {errors.destinationCountry && <p>{errors.destinationCountry}</p>}
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Start date"
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End date"
        required
      />
      {errors.endDate && <p>{errors.endDate}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default JourneyForm;
