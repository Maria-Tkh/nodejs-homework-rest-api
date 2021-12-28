// const express = require('express')
// const request = require('supertest')
// const signup = require('./signup')

// const app = express()

// app.post('/api/users', signup)

// let assert = require('assert')
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1)
//     })
//   })
// })

// describe('test signup controller', () => {
//   let server
//   beforeAll(() => server = app.listen(3000))
//   afterAll(() => server.close())

//   test('signup return user object', async() => {
//     const response = await request(app).post('/api/users')
//     //   201
//     expect(response.status).toBe(200)

//     // token
//     const [user] = response.body
//     expect(typeof user.email).toBe('string')
//     expect(typeof user.subscription).toBe('string')
//   })
// })
