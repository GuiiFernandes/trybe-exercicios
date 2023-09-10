const express = require('express');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = req.body;
  teams.push(newTeam);
  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) return res.status(404).json({ message: 'Team not found!' });

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ team: updateTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const teamIndex = teams.findIndex((team) => team.id === Number(id));
  teams.splice(teamIndex, 1);
  res.status(200).end();
});

module.exports = app;