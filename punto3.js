const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Model = Sequelize.Model;
  class Argentina extends Model {}
  Argentina.init({
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'argentinian'
  });


class Argentinian extends Sequelize.Model {}
Argentinian.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });



sequelize.sync()
  .then(() => Argentinian.create({
    firstName: 'Juan',
    lastName: 'Musso'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

sequelize.sync()
  .then(() => Argentinian.create({
    firstName: 'Joaquin',
    lastName: 'Correa'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });


sequelize.sync()
  .then(() => Argentinian.create({
    firstName: 'Angel',
    lastName: 'Di Maria'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });



Argentinian.update({ lastName: "Correa" }, {
    where: {  
      lastName: 'Messi'
    }
  }).then(() => {
    console.log("Done");
  });


Argentinian.update({ lastName: "Musso" }, {
    where: {  
      firstName: 'Arquero'
    }
  }).then(() => {
    console.log("Done");
  });




    