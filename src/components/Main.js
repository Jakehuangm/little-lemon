import React, { useReducer } from 'react';
import BookingForm from './BookingForm'; 

const initializeTimes = () => {
  // Initial available times
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    const dayOfWeek = new Date(action.date).getDay();

    // Check for weekends: Sunday (0) or Saturday (6)
    if (dayOfWeek === 5 || dayOfWeek === 6) {
      return ['12:00', '13:00', '14:00']; // Weekend times
    } else {
      // Weekdays: Monday (1) to Friday (5)
      return ['17:00', '18:00', '19:00']; // Weekday times
    }
  }
  return state;
};


function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <section id="home">
        <h2>Home</h2>
        <p>This is the home section.</p>
      </section>
      <section id="about">
        <h2>About</h2>
        <p>Learn more about us here.</p>
      </section>
      <section id="booking">
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </section>
    </main>
  );
}

export default Main;