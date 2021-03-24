const {connection} = require("../database/db_connection.js");
const {Run} = require("../database/db_connection.js");

let getAllRuns = async () => {
    const results = await connection.query(
        "SELECT * FROM dbo.Runs"
    );
    return results;
}

let getRunById = async (runId) => {
    const results = await connection.query(
        "SELECT * FROM dbo.Runs WHERE runId='" + runId  + "'"
    );
    return results;
}

let createRun = async (runToCreate) => {
    await Run.create({
    runDistance: runToCreate.runDistance,
    runTime: runToCreate.runTime,
    breaks: runToCreate.breaks,
    runName: runToCreate.runName
});
}

let deleteRun = async (runId) => {
    await connection.query(
        "DELETE FROM dbo.Runs WHERE runId='" + runId  + "'"
    );
    return (console.log("Run deleted"));
}

let updateRun = async (run) => {
    await Run.update({    
        runDistance: run.runDistance,
        runTime: run.runTime,
        breaks: run.breaks,
        runName: run.runName}, {
        where: {
            runId: run.runId
        }
    });
}

module.exports = {
    getAllRuns,
    getRunById,
    createRun,
    deleteRun,
    updateRun
}