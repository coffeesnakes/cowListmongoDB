const {Cow} = require("../../database");

const getCows = (callback) => {
  Cow.find(callback)
}

const addCow = (cow, callback) => {
 Cow.create({
    name: cow.name,
    description: cow.description
 }, (err, docs) => {
   if (err) {
     callback(err);
   } else {
     callback(err, docs);
   }
 })
}

const deleteCow = (_id, callback) => {
  Cow.findByIdAndDelete(_id, callback);
}

const editCow = (query, newData, callback) => {
  console.log('were in the model',)
  Cow.findOneAndUpdate(query, newData, callback);
}

module.exports = {
  getCows,
  addCow,
  deleteCow,
  editCow
};