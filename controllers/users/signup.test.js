const express = require('express')
const request = require('supertest')
const signup = require('./signup')

const app = express()

app.post('/api/users', signup)

describe('test signup controller', () => {
  let server
  beforeAll(() => server = app.listen(3000))
  afterAll(() => server.close())

  test('signup return user object', async() => {
    const response = await request(app).post('/api/users')
    //   201
    expect(response.status).toBe(200)

    // token
    const [user] = response.body
    expect(typeof user.email).toBe('string')
    expect(typeof user.subscription).toBe('string')
  })
})
