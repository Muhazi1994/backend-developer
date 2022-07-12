import fetch from "node-fetch";

let urlPosts = "https://gorest.co.in/public/v1/posts";
let urlUsers = "https://gorest.co.in/public/v1/users";
let urlKorea = "https://www.mockachino.com/7d2e08c6-591e-40/users";
let urlHanguk = "https://www.mockachino.com/7d2e08c6-591e-40/korea";

let data = {};

fetch(urlPosts)
  .then((response) => response.json())
  .then((response) => {
    data = {
      posts: response.data.map((item) => {
        return { userId: item.user_id, title: item.title };
      }),
    };

    return fetch(urlUsers);
  })
  .then((response) => response.json())
  .then((response) => {
    data = {
      ...data,
      users: response.data.filter((elm) => elm.gender === "male"),
    };

    return fetch(urlKorea);
  })
  .then((response) => response.json())
  .then((response) => {
    data = {
      ...data,
      korea: response.users.map((elm) => {
        return {
          firstName: elm.first_name,
          lastName: elm.last_name,
        };
      }),
    };

    return fetch(urlHanguk);
  })
  .then((response) => response.json())
  .then((response) => {
    data = {
      ...data,
      han: response.users.map((item) => {
        return { firstName: item.first_name, nationality: item.nationality };
      }),
    };

    console.log(data);
  })
  .catch((err) => {
    console.error(err.message);
  });
