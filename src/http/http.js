var axios = require('axios');

module.exports = {
  addName: (name) => {
    return axios.post("/add", {name: name})
    .then((res) => {
      console.log("add res: ", res);
    })
    .catch((err) => {
      console.log("add err: ", err);
    })
  },

  getAllName: () => {
    return axios.get("/all")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("err from get all names: ", err);
    })
  }


}
