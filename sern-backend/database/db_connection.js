const Sequelize = require("sequelize");
const {dbHost, dbPort} = require("../consts.json");
const {Run} = require("../models/Run.js");

const connection = new Sequelize("FitnessTrack", "admin", "password", {
    host: dbHost,
    port: dbPort,
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});

const Run = Run(connection, Sequelize);

connection.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

module.exports = {
  Run,
  connection};

