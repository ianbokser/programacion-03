const express = require('express');
const bcrypt = require('bcrypt');
const { faker } = require('@faker-js/faker');
const { Pet } = require('../models/Pet');
const { User } = require('../models/User');
const router = express.Router();

function generateMockPets(quantity) {
  const pets = [];
  for (let i = 0; i < quantity; i++) {
    pets.push({
      name: faker.person.firstName(),
      species: faker.animal.type(),
      adopted: false,
    });
  }
  return pets;
}

function generateMockUsers(quantity) {
  const users = [];
  const passwordHash = bcrypt.hashSync('coder123', 10);

  for (let i = 0; i < quantity; i++) {
    users.push({
      username: faker.internet.username(),
      email: faker.internet.email(),
      password: passwordHash,
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: [],
    });
  }
  return users;
}

router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(100);
  res.json({ status: 'success', data: pets });
});

router.get('/mockingusers', (req, res) => {
  const users = generateMockUsers(50);
  res.json({ status: 'success', data: users });
});

router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;

  if (!users || !pets) {
    return res.status(400).json({ status: 'error', message: 'Faltan parámetros "users" y/o "pets".' });
  }

  try {
    const mockUsers = generateMockUsers(users);
    const mockPets = generateMockPets(pets);

    await User.insertMany(mockUsers);
    await Pet.insertMany(mockPets);

    res.json({
      status: 'success',
      message: `Se insertaron ${users} usuarios y ${pets} mascotas.`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Error al insertar los datos en la base de datos.' });
  }
});

module.exports = router;
