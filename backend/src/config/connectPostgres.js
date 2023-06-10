const { Sequelize } = require('sequelize');
require('express-async-errors');
import DatabaseConnectionError from '../errors/DatabaseConnectionError';
const sequelize = new Sequelize('postgres', 'postgres','dinhvinhkhuong', {
    host: 'db.lkmrqtakugzjncocpguw.supabase.co',
    dialect: 'postgres' ,
    port:5432,
    dialectOptions: 
        'true' === 'true' ?
        {
            ssl:{
                require: true,
                rejectUnauthorized: false,
            }
        }:{},
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