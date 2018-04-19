let mainroutes = require('../controllers/userController');
var path = require('path');



module.exports = (app) => {
  app.post("/add", (req, res) => {
    mainroutes.addName(req, res);
  })

  app.get("/all", (req, res) => {
    mainroutes.getAllName(req, res);
  })

  app.delete("/delete/:id", (req, res) => {
    mainroutes.delete(req, res);
  })

  app.put("/edit/:id/:name", (req, res) => {
    mainroutes.edit(req, res);
  })
}
