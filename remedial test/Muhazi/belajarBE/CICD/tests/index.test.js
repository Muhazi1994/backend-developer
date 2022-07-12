const request = require('supertest');
const server = require('../index');

describe('Test GET /', () => {
  test('Success GET /', async () => {
    const response = await request(server).get('/');

    expect(response.statusCode).toEqual(200);
  });
});
