const { BadRequest } = require('http-errors')

const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validation(req.body)
    if (error) {
      throw new BadRequest('Missing required name field')
    }
    next()
  }
}

module.exports = validation