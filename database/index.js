const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cows", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to mongoDB");
});

const cowSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Cow = mongoose.model("Cow", cowSchema);

module.exports = {
  Cow
};
