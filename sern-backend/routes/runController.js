const express = require("express");
const router = express.Router();
const query = require("../queries/runQueries.js");

router.get("/getAllRuns", (req, res) => {
    query.getAllRuns()
        .then(runResult => res.json(runResult));
});

router.get("/getRun", (req,res) => {
    query.getRunById(req.body.runId) 
        .then(runResult => res.json(runResult));
});

router.post("/createRun", (req,res) => {
    query.createRun(req.body)
        .then(console.log("Run created"));
});

router.delete("/deleteRun", (req,res) => {
    query.deleteRun(req.body) 
        .then(console.log("Run deleted"));
});

router.patch("/updateRun", (req,res) => {
    query.updateRun(req.body) 
        .then(console.log("Run updated"));
});

module.exports = router;