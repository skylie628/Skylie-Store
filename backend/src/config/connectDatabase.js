const { Sequelize } = require('sequelize');
require('express-async-errors');
import DatabaseConnectionError from '../errors/DatabaseConnectionError';
const sequelize = new Sequelize('skylie store', 'root', null, {
    host: 'localhost',
    dialect: 'mysql' ,
    logging: false,
  });

const connectDatabase = async()=>{ 
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log(error)
  }
}
export default connectDatabase;