const contactsOperations = require('../../model/contacts')
// const { BadRequest } = require('http-errors')
// const Joi = require('joi')

// const contactSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// })

const addContact = async (req, res) => {
  // try {
  // const { error } = contactSchema.validate(req.body)
  // if (error) {
  //   throw new BadRequest('Missing required field')
  // }
  const result = await contactsOperations.addContact(req.body)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result
    }
  })
  // } catch (error) {
  //   next(error)
  // }
}

module.exports = addContact
