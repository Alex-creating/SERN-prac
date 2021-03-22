const {connection} = require("../database/db_connection.js");
const cycle = require("../models/Cycle.js");

let getAllCycles = async () => {
    const results = await connection.query(
        "SELECT * FROM cycle"
    );
    return results;
}

let getCycleById = async (cycleId) => {
    const results = await connection.query(
        "SELECT * FROM cycle WHERE cycleId=`" + cycleId  + "`"
    );
    return results;
}

// let createCycle = async (cycleToCreate) => {
//     connection.query{
//         "INSERT INTO cycle ("
//     }

// }

let createCycle = async (cycleToCreate) => {
    const cycle = await cycle.create({
    cycleDistance: cycleToCreate.cycleDistance,
    cycleTime: cycleToCreate.cycleTime,
    cycleName: cycleToCreate.cycleName
});
}

let deleteCycle = async (cycleId) => {
    await cycle.destory({
        where: {
            cycleId: cycleId
        }
    });
}

let updateCycle = async (cycle) => {
    await cycle.update({    
        cycleDistance: cycle.cycleDistance,
        cycleTime: cycle.cycleTime,
        cycleName: cycle.cycleName}), {
        where: {
            cycleId: cycle.cycleId
        }
    }
}

module.exports = {
    getAllCycles,
    getCycleById,
    createCycle,
    deleteCycle,
    updateCycle
}