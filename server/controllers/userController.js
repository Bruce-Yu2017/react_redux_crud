let mongoose = require('mongoose');
let path = require("path");
let User = mongoose.model("User");


module.exports = {
  addName: (req, res) => {
    console.log(req.body.name);
    let user = new User();
    user.name = req.body.name;
    user.save((err) => {
      res.json("success add name");
    })
  },

  getAllName: (req, res) => {
    User.find({}, (err, name) => {
      console.log(name)
      res.json(name);
    })
  },

  delete: (req, res) => {
    User.remove({_id: req.params.id}, (err) => {
      res.json("delete success from server")
    })
  },

  edit: (req, res) => {
    User.findByIdAndUpdate(req.params.id, {$set: {name: req.params.name}}, (err) => {
      res.json("edit success")
    })
  }
}
