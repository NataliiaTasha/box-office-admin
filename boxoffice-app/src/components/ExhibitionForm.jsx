import React, { useState } from 'react';
import '../assets/css/ExhibitionForm.css';
import axios from 'axios';

const ExhibitionForm = () => {
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [openingDays, setOpeningDays] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/exhibition-hub-boxoffice', {
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
    <form className='addExhibition' onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder="Title"
      name='title'
      value={title} 
      onChange={(e) => setTitle(e.target.value)} 
      required 
      />
      <input 
      type="text" 
      placeholder="City" 
      name='city'
      value={city} onChange={(e) => setCity(e.target.value)} 
      required 
      />
      <input 
      type="text" 
      placeholder="Opening Days" 
      name='opening_days'
      value={openingDays} 
      onChange={(e) => setOpeningDays(e.target.value)} 
      required
      />
      <input 
      type="time" 
      value={openingTime} 
      name='opening_time'
      onChange={(e) => setOpeningTime(e.target.value)} 
      required 
      />
      <input 
      type="time" 
      value={closingTime} 
      name='closing_time'
      onChange={(e) => setClosingTime(e.target.value)} 
      required 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExhibitionForm;
