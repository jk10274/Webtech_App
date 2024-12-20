"use client";

import React from 'react';
import JourneyForm from '@/components/AddJourneyForm';
import axios from 'axios';
import AddJourneyForm from '@/components/AddJourneyForm';

const AddJourneyPage: React.FC = () => {

  const handleAddJourney = async (data: any) => {
    await axios.post('http://localhost:3000/api/journeys', data);
  };

  return (
    <div>
      <h1>Add Journey</h1>
      <AddJourneyForm/>
    </div>
  );
};

export default AddJourneyPage;