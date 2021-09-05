//PUNTO 2
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


class Argentina extends Sequelize.Model {}
  Argentina.init({
    firstName: Sequelize.STRING,
    lastName:Sequelize.STRING
  }, { sequelize, modelName: 'users' });


const Model = Sequelize.Model;
class User extends Model {}
User.init({
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'user'
  });


sequelize.sync()
    .then(() => Argentina.create({
        firstName: 'Rodrigo',
        lastName: 'De Paul'
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });

sequelize.sync()
    .then(() => Argentina.create({
        firstName: 'Lionel',
        lastName: 'Otamendi'
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });

User.destroy({
        where: {
        id: 1
        }
    }).then(() => {
        console.log("Elimine Registro");
    });