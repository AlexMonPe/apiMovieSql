import { Sequelize } from "sequelize";

let sequelize;

try {
  sequelize = new Sequelize('apirestfullmovies', 'root', 'a12345678', {
    host: 'localhost',
    dialect: 'mysql'
  });
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;