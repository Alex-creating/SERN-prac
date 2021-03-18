const {connection} = require("../database/db_connection.js");

let getAllRuns = async () => {
    const results = await connection.query(
        "SELECT * FROM run"
    );
    return results;
}

module.exports = {
    getAllRuns;
}