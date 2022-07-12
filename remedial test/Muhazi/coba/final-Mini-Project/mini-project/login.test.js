const request = require("supertest");
const { users } = require("./models");
const app = require("./index");
const { encryptPwd } = require("./helpers/encryption");
const { createUpdateUserValidator } = require("./middlewares/validators/users");

beforeAll(async () => {});

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

describe("TESTING SIGN-UP", () => {
  describe("SUCCESS SCENARIO", () => {
    it("Should return 201 and obj (user)", (done) => {
      const password = "Aa1!bbbbcccc";
      let input = {
        firstName: "jestttttt",
        lastName: "testing",
        email: "jest@testing3.com",
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

          // hapus passwords dari payload
          delete input.password;
          delete input.confirmPassword;
          // hapus id dari response api
          delete body.output.id;
          const finalInput = Object.assign(input, { statusCode: 201 });

          expect(body.output).toMatchObject(finalInput);
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

  describe("FAILED SCENARIO", () => {
    let input = {
      firstName: "jest",
      lastName: "testing",
      email: "jest@testing.com",
      password: "Aa1!bbbbcccc",
      confirmPassword: "Aa1!bbbbcccc",
    };

    describe("firstname less than 5 characters", () => {
      input.firstName = "abcd";
      it("Should return validator and error messages", (done) => {
        request(app)
          .post("/users/signup")
          .send(input)
          .then((response) => {
            const { body, messages } = response;
            expect(body).toHaveProperty("errors");
            expect(body.errors).toEqual(
              expect.arrayContaining([
                "Please Input First Name at least 5 Characters !",
              ])
            );
            done();
          })
          .catch((err) => {
            done(err);
          });
      });
    });
    describe("lastName not exist", () => {
      input.lastName = "              ";
      it("Should return validator and error messages", (done) => {
        request(app)
          .post("/users/signup")
          .send(input)
          .then((response) => {
            const { body, messages } = response;
            expect(body).toHaveProperty("errors");
            expect(body.errors).toEqual(
              expect.arrayContaining([
                "Please Input First Name at least 5 Characters !",
              ])
            );
            done();
          })
          .catch((err) => {
            done(err);
          });
      });
    });
    describe("wrong email format", () => {
      input.email = "kljhbov87yg";
      it("Should return validator and error messages", (done) => {
        request(app)
          .post("/users/signup")
          .send(input)
          .then((response) => {
            const { body, messages } = response;
            expect(body).toHaveProperty("errors");
            expect(body.errors).toEqual(
              expect.arrayContaining(["Email is not valid"])
            );
            done();
          })
          .catch((err) => {
            done(err);
          });
      });
    });
  });
});
