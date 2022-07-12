// const axios = require("axios");
import axios from "axios";

let urlPosts = "https://gorest.co.in/public/v1/posts";
let urlUsers = "https://gorest.co.in/public/v1/users";
let urlKorea = "https://www.mockachino.com/7d2e08c6-591e-40/users";
let urlHanguk = "https://www.mockachino.com/7d2e08c6-591e-40/korea";

let data = {};

axios
  .get(urlPosts)
  .then((response) => {
    data = {
      posts: response.data.data.map((item) => {
        return { userId: item.user_id, title: item.title };
      }),
    };
    return axios.get(urlUsers);
  })
  .then((response) => {
    data = {
      ...data,
      users: response.data.data.filter((item) => item.gender === "female"),
    };

    return axios.get(urlKorea);
  })
  .then((response) => {
    data = {
      ...data,
      korea: response.data.users.map((elm) => {
        return { firstName: elm.first_name, lastName: elm.last_name };
      }),
    };

    return axios.get(urlHanguk);
  })
  .then((response) => {
    data = {
      ...data,
      han: response.data.users.map((elm) => {
        return { firstName: elm.first_name, nationality: elm.nationality };
      }),
    };

    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
