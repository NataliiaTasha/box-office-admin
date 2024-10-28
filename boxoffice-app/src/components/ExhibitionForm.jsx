import React, { useState } from 'react';
//import axios from 'axios';

const ExhibitionForm = () => {
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [openingDays, setOpeningDays] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/exhibitions', {
        title,
        city,
        opening_days: openingDays,
        opening_time: openingTime,
        closing_time: closingTime,
      });
      console.log(response.data);
        setTitle('');
    } catch (error) {
      console.error('Error creating exhibition:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
      <input type="text" placeholder="Opening Days" value={openingDays} onChange={(e) => setOpeningDays(e.target.value)} />
      <input type="time" value={openingTime} onChange={(e) => setOpeningTime(e.target.value)} required />
      <input type="time" value={closingTime} onChange={(e) => setClosingTime(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExhibitionForm;
