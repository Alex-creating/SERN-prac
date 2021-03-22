module.exports = function(sequelize, type) {
    const Run = sequelize.define("Run", {
        runId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        runName: {
            type: type.STRING
        },
        runDistance: {
            type: type.INTEGER,
            allowNull: false
        },
        runTime: {
            type: type.DATE,
            allowNull: false
        },
        breaks: {
            type: type.INTEGER,
            allowNull: false
        },
        Difficulty: {
            type: type.INTEGER
        }
    });

    return Run;
}