module.exports = function(sequelize, type) {
    const Cycle = sequelize.define("Cycle", {
        cycleId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cycleName: {
            type: type.STRING
        },
        cycleDistance: {
            type: type.INTEGER,
            allowNull: false
        },
        cycleTime: {
            type: type.DATE,
            allowNull: false
        }
    });

    return Cycle;
}