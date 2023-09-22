const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });
  // (async () => {
  //   await sequelize.sync({ force: true });
  //   let sara = User.build({ //útil para criar uma instância de um model, mas sem salvá-la no banco de dados. Podemos usar essa função quando queremos criar um objeto que vai armazenar dados temporários, por exemplo:
  //     fullName: 'Sara Silva Santos',
  //     email: 'sara.ss@trybe.com',
  //   });

  //   console.log(sara instanceof User); // true
  //   console.log(sara.fullName); // "Sara Silva Santos"
  //   await sara.save(); //Como build é sincrono não salva no db, por isso usamos o save.
  //   console.log('Pessoa salva no banco de dados!');

  //   sara = await User.create({ //Combinda o build e save em uma única função. Assincrono, porque se comunica com o db.
  //     fullName: 'Sara Silva Santos',
  //     email: 'sara.ss@trybe.com',
  //   });

  //   console.log(sara instanceof User); // true
  //   console.log(sara.name); // "Sara Silva Santos"

  // })();
  return User;
};

module.exports = UserModel;