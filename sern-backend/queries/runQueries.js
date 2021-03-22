const {connection} = require("../database/db_connection.js");
const run = require("../models/Run.js");

let getAllRuns = async () => {
    const results = await connection.query(
        "SELECT * FROM run"
    );
    return results;
}

let getRunById = async (runId) => {
    const results = await connection.query(
        "SELECT * FROM run WHERE runId=`" + runId  + "`"
    );
    return results;
}

// let createRun = async (runToCreate) => {
//     connection.query{
//         "INSERT INTO run ("
//     }

// }

let createRun = async (runToCreate) => {
    const run = await run.create({
    runDistance: runToCreate.runDistance,
    runTime: runToCreate.runTime,
    breaks: runToCreate.breaks,
    runName: runToCreate.runName
});
}

let deleteRun = async (runId) => {
    await run.destory({
        where: {
            runId: runId
        }
    });
}

let updateRun = async (run) => {
    await run.update({    
        runDistance: run.runDistance,
        runTime: run.runTime,
        breaks: run.breaks,
        runName: run.runName}), {
        where: {
            runId: run.runId
        }
    }
}

module.exports = {
    getAllRuns,
    getRunById,
    createRun,
    deleteRun,
    updateRun
}