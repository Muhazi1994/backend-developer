const request = require("supertest");
const { users } = require("./models");
const app = require("./index");
const { encryptPwd } = require("./helpers/encryption");
const { createUpdateUserValidator } = require("./middlewares/validators/users");

beforeAll(async () => {
  let user = await users.create({
    firstName: "Gerry",
    lastName: "Pratama",
    email: "gerryajie@gmail.com",
    password: "Bantenku123!",
  });
});
afterAll((done) => {
  users
    .destroy({ where: {}, force: true })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
});

describe("users signup", () => {
  describe("Successfully create user", () => {
    it("Should return 201 and obj (user)", (done) => {
      const password = encryptPwd("Bantenku123!");
      let input = {
        firstName: "Gerry",
        lastName: "Pratama",
        email: "gerryajie1@gmail.com",
        password: password,
        confirmPassword: password,
      };
      request(app)
        .post("/users/signup")
        .send(input)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(201);
          expect(body).toHaveProperty("output");
          expect(body).toHaveProperty("messages");
          expect(body.output).toMatchObject({
            id: 2,
            firstName: "Gerry",
            lastName: "Pratama",
            email: "gerryajie1@gmail.com",
            statusCode: 201,
          });
          expect(body.messages).toBe(
            "Congrats! You have successfully created an account."
          );
          done();
        })

        .catch((err) => {
          done(err);
        });
    });
  });

  describe("Email already registered", () => {
    it("Should return validator and error messages", (done) => {
      let input = {
        firstName: "Gerry",
        lastName: "Pratama",
        email: "gerryajie@gmail.com",
        password: "Rahasiaaa1@",
        confirmPassword: "Rahasiaaa1@",
      };
      request(app)
        .post("/users/signup")
        .send(input)
        .then((response) => {
          const { body, messages } = response;
          expect(body).toHaveProperty("errors");
          expect(body.errors).toEqual(
            expect.arrayContaining(["Email already registered!!"])
          );
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
});
