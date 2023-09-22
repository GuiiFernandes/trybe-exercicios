const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../src/models/user.model');

describe('O model de User', function () {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('possui o nome "User"', function () {
    checkModelName(User)('User');
  });

  describe('possui as propriedades "fullName" e "email"', function () {
    ['fullName', 'email'].forEach(checkPropertyExists(user));
  });
});