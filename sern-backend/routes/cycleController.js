const express = require("express");
const router = express.Router();
const query = require("../queries/cycleQueries.js");

router.get("/getAllCycles", (req, res) => {
    query.getAllCycles()
        .then(cycleResult => res.json(cycleResult));
});

router.get("/getCycle", (req,res) => {
    query.getCycleById(req.body.cycleId) 
        .then(cycleResult => res.json(cycleResult));
});

router.post("/createCycle", (req,res) => {
    query.createCycle(req.body)
        .then(res.send(console.log("Cycle created")));
});

router.delete("/deleteCycle", (req,res) => {
    query.deleteCycle(req.body.cycleId) 
        .then(res.send(console.log("Cycle deleted")));
});

router.patch("/updateCycle", (req,res) => {
    query.updateCycle(req.body) 
        .then(res.send(console.log("Cycle updated")))
        .catch(err => console.log(err));
});

module.exports = router;