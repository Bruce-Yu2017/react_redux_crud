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
  }
}
