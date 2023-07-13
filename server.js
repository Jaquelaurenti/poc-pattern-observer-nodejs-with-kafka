// backend/server.js
const express = require('express');
const cors = require('cors');
const ObserverController = require('./src/interfaces/ObserverController');

const app = express();
const observerController = new ObserverController();

app.use(cors());
app.use(express.json());

// Rota para adicionar um observador
app.post('/api/observer', (req, res) => {
  const { name } = req.body;
  const response = observerController.addObserver(name);
  console.log(response)
  if(response)
  res.status(201).json({ message: 'Observer added successfully' });
});

// Rota para obter a lista de observadores
app.get('/api/observers', (req, res) => {
  console.log("estou aqui no server")
  const observers = observerController.getAllObservers();
  res.status(200).json(observers);
});

// Rota para simular um evento para os observadores
app.post('/api/events', (req, res) => {
  const { event } = req.body;
  observerController.notifyObservers(event);
  res.status(200).json({ message: 'Event notified successfully' });
});

// Inicie o servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
