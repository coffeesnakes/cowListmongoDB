const {Cow, db} = require("../../database");

const getCows = (callback) => {
  Cow.find(callback)
}

const addCow = (cow, callback) => {
  console.log('cow added', cow)
  let newCow = new Cow({
    name:cow.name,
    description:cow.description,
    id: db._id
  })
  newCow.save(callback)
}
// so  when i write newCow = new db i'm actually doing new mongoose.model('cow', cowSchema) technically
// since that's the only thing being exported from ../../database??



module.exports = {
  getCows,
  addCow
};