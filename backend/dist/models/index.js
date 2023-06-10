'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var process = require('process');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
console.log('config...');
var config = require(__dirname + '/../config/config.json')[env];
var db = {};
var sequelize;
if (config.use_env_variable) {
  //sequelize = new Sequelize(process.env[config.use_env_variable], config);
  sequelize = new Sequelize('postgres', 'postgres', 'dinhvinhkhuong', {
    host: 'db.lkmrqtakugzjncocpguw.supabase.co',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: 'false' === 'true' ? {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    } : {},
    logging: false
  });
} else {
  // sequelize = new Sequelize(config.database, config.username, config.password, config);
  sequelize = new Sequelize('postgres', 'postgres', 'dinhvinhkhuong', {
    host: 'db.lkmrqtakugzjncocpguw.supabase.co',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: 'true' === 'true' ? {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    } : {},
    logging: false
  });
}
fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js' && file.indexOf('.test.js') === -1;
}).forEach(function (file) {
  var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
sequelize.sync();
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
//# sourceMappingURL=index.js.map