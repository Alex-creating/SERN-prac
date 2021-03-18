const express = require("express");
const router = express.Router();
const query = require("../queries/runQueries.js");

router.get("/getAllRuns", (req, res) => {
    query.getAllRuns()
        .then(responded => {
            try {
                responded.runId;
                res.send(true);
            } catch (error) {
                res.send(false);
            }
        });
});