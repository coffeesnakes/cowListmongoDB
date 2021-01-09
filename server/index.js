const express = require("express");
const app = express();
const port = 3003;
const bodyParser = require("body-parser");
const path = require("path");
const controllers = require("./controllers/cowtrollers.js");

// parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// serve
app.use("/", express.static(path.join(__dirname, "../client/dist")));
// routes
app.get("/cows", controllers.getCows);
app.post("/cows", controllers.addCow);
app.delete("/cows/:id", controllers.deleteCow)
app.put("/cows/:id", controllers.editCow)

app.listen(port, console.log(`listening on: ${port}`));


