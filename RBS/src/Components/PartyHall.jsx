import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const PartyHall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    numberOfGuests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here

    // Assuming you have a function to handle form submission
    submitReservation(formData);
  };

  return (
    <div>
      <h2>Party Hall Reservation</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Number of Guests"
              name="numberOfGuests"
              type="number"
              value={formData.numberOfGuests}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Submit Reservation
        </Button>
      </form>
    </div>
  );
};

export default PartyHall;
