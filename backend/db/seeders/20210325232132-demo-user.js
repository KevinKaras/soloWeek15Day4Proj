'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: "kevin@gmail.com",
        username: "TheFirstKevin",
        hashedPassword: "exampleHashedPassword1"
      },
      {
        email: "kevin2@gmail.com",
        username: "TheSecondKevin",
        hashedPassword: "exampleHashedPassword2"
      },
      {
        email: "kevin3@gmail.com",
        username: "TheThirdKevin",
        hashedPassword: "exampleHashedPassword3"
      },
      {
        email: "kevin4@gmail.com",
        username: "TheFourthKevin",
        hashedPassword: "exampleHashedPassword4"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};