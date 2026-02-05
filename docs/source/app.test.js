const request = require('supertest');
const app = require('./app');

test('GET / returns Hello CI/CD!', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hello CI/CD!');
});
