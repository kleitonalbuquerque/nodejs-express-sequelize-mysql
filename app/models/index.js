const dbConfig = require("../config/db.config.js");

const Sequilize = require("sequelize");
const sequelize = new Sequilize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequilize = Sequilize;
db.sequelize = sequelize;

db.usuarios = require("./usuario.model.js")(sequelize, Sequilize);

module.exports = db;
