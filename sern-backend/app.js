const app = require("express")();
const port = 8081;
const cors = require("cors");
const connection = require("./database/db_connection.js");
const runController = require("./routes/runController.js");
const cycleController = require("./routes/cycleController.js");

app.use(cors({origin: "http://localhost:8081"}));

app.use("/", runController);
app.use("/", cycleController);

const server = app.listen(port, () => {
    console.log("Server has started listening on port " + port);
});

// connection.connection.authenticate()
// .then(() => console.log("database working"))
// .catch(err =>  console.log(err));
