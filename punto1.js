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


// Inserta registro
sequelize.sync()
  .then(() => Argentinian.create({
    firstName: 'Lionel',
    lastName: 'Scaloni'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });


//actualización registro
Argentinian.update({ firstName: "Lautaro", lastName: "Martinez" }, {
    where: {
      firstName: "juancito",  
      lastName: 'magico'
    }
  }).then(() => {
    console.log("Done");
  });
  

