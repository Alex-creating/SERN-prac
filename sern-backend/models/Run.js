const Sequelize = require("sequelize");
const connection = require("../database/db_connection");

const Run = connection.define("Run", {
    runId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    runName: {
        type: Sequelize.STRING
    },
    runDistance: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    runTime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    breaks: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Difficulty: {
        type: Sequelize.INTEGER
    }
});

module.exports = User;