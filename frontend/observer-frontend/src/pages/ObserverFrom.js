import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ObserverForm = ({ onAddObserver, onAddEvent }) => {
  const [observer, setObserver] = useState('');
  const [event, setEvent] = useState('');
  const [observers, setObservers] = useState([]);

  const handleObserverChange = (e) => {
    setObserver(e.target.value);
  };

  const handleEventChange = (e) => {
    setEvent(e.target.value);
  };

  const fetchObservers = async () => {
    try {
      console.log(api.getUri())
      const response = await api.get('/observers');
      console.log("response:", response.data)
      if (response.status === 200) {
        const data = response.data;
        console.log("data", data)
        setObservers(data);
      } else {
        console.error('Failed to fetch observers');
      }
    } catch (error) {
      console.error('Failed to fetch observers:', error);
    }
  };

  useEffect(() => {
    fetchObservers();
  }, []);
  
  const handleAddObserver = async () => {
    if (observer) {
      try {
        const response = await api.post('/observer', {
          name: observer
        });
  
        if (response.status === 201) {
          onAddObserver(observer);
          setObserver('');
          await fetchObservers(); // Atualiza a lista de observadores
        } else {
          console.error('Failed to add observer');
        }
      } catch (error) {
        console.error('Failed to add observer:', error);
      }
    }
  };
  const handleAddEvent = () => {
    if (event) {
      onAddEvent(event);
      setEvent('');
    }
  };

  return (
    <div>
      <h2>Add Observer</h2>
      <div>
        <input type="text" value={observer} onChange={handleObserverChange} placeholder="Observer" />
        <button onClick={handleAddObserver}>Add Observer</button>
      </div>
      <div>
        <input type="text" value={event} onChange={handleEventChange} placeholder="Event" />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
};

export default ObserverForm;
