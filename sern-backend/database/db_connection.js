const Sequelize = require("sequelize");
const {dbHost} = require("../consts.json");
const RunModel = require("../models/Run.js");
const CycleModel = require("../models/Cycle.js");


const connection = new Sequelize('FitInstance', 'FitUser', 'testpassword', {
  host: "localhost",
  dialect: 'mssql',
  dialectOptions: { options: {instanceName: 'FitInstance' }},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Run = RunModel(connection, Sequelize);
const Cycle = CycleModel(connection, Sequelize);

connection.authenticate()
.then(() => console.log("database working"))
.catch(err =>  console.log(err));

connection.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

 module.exports = {
  Run,
  Cycle,
  connection
};
