const express = require("express");
const app = express();
const port = 3003;
const bodyParser = require("body-parser");
const path = require("path");
const controllers = require("./controllers/cowtrollers.js");

// parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// serve
app.use("/", express.static(path.join(__dirname, "../client/dist")));

app.get("/cows", controllers.getCows);
app.post("/cows", controllers.addCow);

app.listen(port, console.log(`listening on: ${port}`));


