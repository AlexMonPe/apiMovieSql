import { Sequelize , DataTypes, Model } from 'sequelize';
import connection from '../../config/SQLDB.js';

class User extends Model {}

User.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "client"
  }
}, {
  // Other model options go here
  sequelize: connection, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
User.sync()
export default User;
