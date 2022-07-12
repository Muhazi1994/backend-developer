// const fetch = require("node-fetch"); //Tidak bisa
import fetch from "node-fetch";

let urlPosts = "https://gorest.co.in/public/v1/posts";
let urlUsers = "https://gorest.co.in/public/v1/users";
let urlKorea = "https://www.mockachino.com/7d2e08c6-591e-40/users";
let urlHanguk = "https://www.mockachino.com/7d2e08c6-591e-40/korea";

let mhs = {};

const fetchApi = async () => {
  try {
    let response = await Promise.all([
      fetch(urlPosts),
      fetch(urlUsers),
      fetch(urlKorea),
      fetch(urlHanguk),
    ]);

    let data = await Promise.all([
      response[0].json(),
      response[1].json(),
      response[2].json(),
      response[3].json(),
    ]);

    mhs = {
      post: await data[0].data.map((item) => {
        return {
          userId: item.user_id,
          title: item.title,
        };
      }),
      us: await data[1].data.filter((elm) => elm.gender === "male"),
      kor: await data[2].users.map((elm) => {
        return { firstName: elm.first_name, lastName: elm.last_name };
      }),
      han: await data[3].users.map((elm) => {
        return { firstName: elm.first_name, nationality: elm.nationality };
      }),
    };

    console.log(mhs);
  } catch (error) {
    console.error(error.message);
  }
};

fetchApi();
