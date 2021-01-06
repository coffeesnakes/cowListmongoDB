const model = require('../models/cowdels.js');

const getCows = (req, res) => {
  model.getCows((err, cows) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(cows)
    }
  })
}

const addCow = (req, res) => {
  model.addCow(req.body, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  })
}

const deleteCow = (req, res) => {
  model.deleteCow(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  })
};

const editCow = (req, res) => {
  console.log("sending in controller");
  model.editCow(req, (err, alteredcowrbon) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  })
}

module.exports = {
  getCows,
  addCow,
  deleteCow,
  editCow
}