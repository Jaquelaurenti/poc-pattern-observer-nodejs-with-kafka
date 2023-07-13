import React, { useState } from 'react';
import ObserverForm from './pages/ObserverFrom';
import ObserverList from './pages/ObserverList';

const App = () => {
  const [observers, setObservers] = useState([]);

  const handleAddObserver = (observer, event) => {
    const newObserver = `${observer} (event: ${event})`;
    setObservers((prevObservers) => [...prevObservers, newObserver]);
  };

  return (
    <div>
      <h1>Observer App</h1>
      <ObserverForm onAddObserver={handleAddObserver} />
      <ObserverList observers={observers} />
    </div>
  );
};

export default App;
