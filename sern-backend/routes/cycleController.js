const express = require("express");
const router = express.Router();
const query = require("../queries/runQueries.js");

router.get("/getAllCycles", (req, res) => {
    query.getAllCycles()
        .then(runResult => res.json(runResult));
});

router.get("/getCycle", (req,res) => {
    query.getCycleById(req.body.runId) 
        .then(cycleResult => res.json(runResult));
});

router.post("/createCycle", (req,res) => {
    query.createCycle(req.body)
        .then(console.log("Cycle created"));
});

router.delete("/deleteCycle", (req,res) => {
    query.deleteCycle(req.body) 
        .then(console.log("Cycle deleted"));
});

router.patch("/updateCycle", (req,res) => {
    query.updateCycle(req.body) 
        .then(console.log("Cycle updated"));
});

module.exports = router;