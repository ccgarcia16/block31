const express = require('express');
const app = express();

app.listen(8080) //connected to 8080

app.get('/', (req,res) => {
  res.send('Hello All !')
})
//what will be the homepage

const pets = [
  { name: 'Lydia', species: 'Cat', owner: 'War'},
  { name: 'Geoff', species: 'Rabbit', owner: 'Pestilence'},
  { name: 'Tommy', species: 'Fish', owner: 'Famine'}
]

app.get('/api/v1/pets', (req,res) => {
  res.send(pets);
})
//will send the array of objects when the url is put in as so

app.get('/api/v1/pets/:name', (req,res) => {
  const name = req.params.name; 
  const pet = pets.find(pet => pet.name === name);

  if (pet) {
    res.send(pet);
  }
})
//narrowing down how to return the pet from the array based on the URL

app.get('/pets/:name/:owner', (req,res) => {
  const owner = req.params.owner; 
  const petOwner = pets.find(pet => pet.owner === owner);

  if (petOwner) {
    res.send(petOwner);
  }
})