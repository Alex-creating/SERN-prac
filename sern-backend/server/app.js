const app = require("express")();
const port = 8080;
const cors = require("cors");
const connection = require("./database/db_connection.js");
const runController = require("../routes/runController.js");

app.use(cors({origin: "http://localhost:8081"}));

app.use("/", runController);


const server = app.listen(port, () => {
    console.log("Server has started listening on port " + port);
});

connection.authenticate()
.then(() => console.log("database working"))
.catch(err =>  console.log(err));
