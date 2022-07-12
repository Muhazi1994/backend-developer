// const axios = require("axios");
import axios from "axios";

let urlPosts = "https://gorest.co.in/public/v1/posts";
let urlUsers = "https://gorest.co.in/public/v1/users";
let urlKorea = "https://www.mockachino.com/7d2e08c6-591e-40/users";
let urlHanguk = "https://www.mockachino.com/7d2e08c6-591e-40/korea";

let mhs = {};

const fetchApi = async () => {
  try {
    // Pengambilan data satu persatu
    // let responsePosts = await axios.get(urlPosts);
    // let responseUsers = await axios.get(urlUsers);
    // let responseKorea = await axios.get(urlKorea);
    // let responseHanguk = await axios.get(urlHanguk);

    // Pengambilan data secara bersamaan
    let response = await Promise.all([
      axios.get(urlPosts),
      axios.get(urlUsers),
      axios.get(urlKorea),
      axios.get(urlHanguk),
    ]);

    // Input data dari pengambilan data satu persatu
    // mhs = {
    //   posts: responsePosts.data.data.map((item) => {
    //     return { userId: item.user_id, title: item.title };
    //   }),
    //   us: responseUsers.data.data.filter((item) => item.gender === "female"),
    //   kor: responseKorea.data.users.map((elm) => {
    //     return { firstName: elm.first_name, lastName: elm.last_name };
    //   }),
    //   han: responseHanguk.data.users.map((elm) => {
    //     return { firstName: elm.first_name, nationality: elm.nationality };
    //   }),
    // };

    // Input data dari pengambilan data secara bersamaan
    mhs = {
      posts: response[0].data.data.map((item) => {
        return { userId: item.user_id, title: item.title };
      }),
      us: response[1].data.data.filter((elm) => elm.gender === "male"),
      kor: response[2].data.users.map((elm) => {
        return { firstName: elm.first_name, lastName: elm.last_name };
      }),
      han: response[3].data.users.map((elm) => {
        return { firstName: elm.first_name, nationality: elm.nationality };
      }),
    };

    console.log(mhs);
  } catch (error) {
    console.error(error.message);
  }
};

fetchApi();
