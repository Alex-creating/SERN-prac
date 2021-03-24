const {connection} = require("../database/db_connection.js");
const {Cycle} = require("../database/db_connection.js");

let getAllCycles = async () => {
    const results = await connection.query(
        "SELECT * FROM dbo.Cycles"
    );
    return results;
}

let getCycleById = async (cycleId) => {
    const results = await connection.query(
        "SELECT * FROM dbo.Cycles WHERE cycleId='" + cycleId  + "'"
    );
    return results;
}

let createCycle = async (cycleToCreate) => {
    await Cycle.create({
    cycleDistance: cycleToCreate.cycleDistance,
    cycleTime: cycleToCreate.cycleTime,
    cycleName: cycleToCreate.cycleName
});
}

let deleteCycle = async (cycleId) => {
    await connection.query(
        "DELETE FROM dbo.Cycles WHERE cycleId='" + cycleId  + "'"
    );
    return (console.log("Cycle deleted"));
}

let updateCycle = async (cycle) => {
    await Cycle.update({    
        cycleDistance: cycle.cycleDistance,
        cycleTime: cycle.cycleTime,
        cycleName: cycle.cycleName}, {
        where: {
            cycleId: cycle.cycleId
        }
    });
}

module.exports = {
    getAllCycles,
    getCycleById,
    createCycle,
    deleteCycle,
    updateCycle
}