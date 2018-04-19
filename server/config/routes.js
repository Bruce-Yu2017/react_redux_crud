let mainroutes = require('../controllers/userController');
var path = require('path');



module.exports = (app) => {
  app.post("/add", (req, res) => {
    mainroutes.addName(req, res);
  })

  app.get("/all", (req, res) => {
    mainroutes.getAllName(req, res);
  })
}
