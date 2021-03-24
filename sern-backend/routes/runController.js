const express = require("express");
const router = express.Router();
const query = require("../queries/runQueries.js");

router.get("/getAllRuns", (req, res) => {
    query.getAllRuns()
        .then(runResult => res.json(runResult))
        .catch(err => console.log(err));
});

router.get("/getRun", (req,res) => {
    query.getRunById(req.body.runId) 
        .then(runResult => res.json(runResult))
        .catch(err => console.log(err));
});

router.post("/createRun", (req,res) => {
    query.createRun(req.body)
        .then(res.send(console.log("Run created")))
        .catch(err => console.log(err));
});

router.delete("/deleteRun", (req,res) => {
    query.deleteRun(req.body.runId) 
        .then(res.send(console.log("Run deleted")))
        .catch(err => console.log(err));
});

router.patch("/updateRun", (req,res) => {
    query.updateRun(req.body) 
        .then(res.send(console.log("Run updated")))
        .catch(err => console.log(err));
});

module.exports = router;