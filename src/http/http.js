var axios = require('axios');

module.exports = {
  addName: (name) => {
    return axios.post("/add", {name: name})
    .then((res) => {
      // console.log("add res: ", res);
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
  },

  delete: (id) => {
    return axios.delete(`/delete/${id}`)
    .then((res) => {
      console.log("delete success")
    })
    .catch((err) => {
      console.log("delete err: ", err);
    })
  },

  editName: (name, id) => {
    return axios.put(`/edit/${id}/${name}`)
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log("edit err: ", err);
    })
  }


}
