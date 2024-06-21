document.addEventListener('DOMContentLoaded', () => {
  const eventForm = document.getElementById('event-form');
  const eventsList = document.getElementById('events-list');
  let selectedEventId = null;

  // Fetch and display events
  async function fetchEvents() {
    try {
      const res = await fetch('http://localhost:3001/events');
      const events = await res.json();
      eventsList.innerHTML = '';
      events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.name} - ${new Date(event.date).toDateString()} - ${event.location} - ${event.participantName} - ${event.participantAge} - ${event.sportType}`;
        listItem.setAttribute('data-e-id', event._id);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', async (e) => {
          e.stopPropagation();
          await deleteEvent(event._id);
        });

        listItem.appendChild(deleteButton);
        listItem.addEventListener('click', () => {
          selectedEventId = event._id;
          document.getElementById('event-name').value = event.name;
          document.getElementById('event-date').value = event.date;
          document.getElementById('event-location').value = event.location;
          document.getElementById('participant-name').value = event.participantName;
          document.getElementById('participant-age').value = event.participantAge;
          document.getElementById('sport-type').value = event.sportType;
        });

        eventsList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  }

  eventForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('event-name').value;
    const date = document.getElementById('event-date').value;
    const location = document.getElementById('event-location').value;
    const participantName = document.getElementById('participant-name').value;
    const participantAge = document.getElementById('participant-age').value;
    const sportType = document.getElementById('sport-type').value;

    const eventData = {
      name,
      date,
      location,
      participantName,
      participantAge,
      sportType
    };

    console.log('Adding event:', eventData); // Log event data

    try {
      const res = await fetch('http://localhost:3001/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      const responseData = await res.json();
      if (res.ok) {
        eventForm.reset();
        selectedEventId = null;
        fetchEvents();
      } else {
        console.error('Failed to add event:', responseData.message);
      }
    } catch (error) {
      console.error('Error adding event:', error.message);
    }
  });

  // Update event
  document.getElementById('update-button').addEventListener('click', async () => {
    if (!selectedEventId) {
      return;
    }
    const name = document.getElementById('event-name').value;
    const date = document.getElementById('event-date').value;
    const location = document.getElementById('event-location').value;
    const participantName = document.getElementById('participant-name').value;
    const participantAge = document.getElementById('participant-age').value;
    const sportType = document.getElementById('sport-type').value;

    const eventData = {
      name,
      date,
      location,
      participantName,
      participantAge,
      sportType
    };

    console.log('Updating event:', eventData); // Log event data

    try {
      const res = await fetch(`http://localhost:3000/events/${selectedEventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      const responseData = await res.json();
      if (res.ok) {
        eventForm.reset();
        selectedEventId = null;
        fetchEvents();
      } else {
        console.error('Failed to update event:', responseData.message);
        
      }
    } catch (error) {
      console.error('Error updating event:', error.message);
      
    }
  });

  // Delete event function
  async function deleteEvent(eventId) {
    try {
      const res = await fetch(`http://localhost:3000/events/${eventId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        eventForm.reset();
        selectedEventId = null;
        fetchEvents();
      } else {
        const responseData = await res.json();
        console.error('Failed to delete event:', responseData.message);
        
      }
    } catch (error) {
      console.error('Error deleting event:', error.message);
      
    }
  }

  fetchEvents();
});
