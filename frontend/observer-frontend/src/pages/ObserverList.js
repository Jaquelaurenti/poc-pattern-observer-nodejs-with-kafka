import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ObserverList = () => {
  const [observers, setObservers] = useState([]);

  useEffect(() => {
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

    fetchObservers();
  }, []);

  return (
    <div>
      <h2>Observer List</h2>
      <ul>
        {observers.map((observer, index) => (
          <li key={index}>{observer.name} (event: {observer.event})</li>
        ))}
      </ul>
    </div>
  );
};

export default ObserverList;
