const contactsOperations = require('../../model/contacts')
const { NotFound } = require('http-errors')
// const { BadRequest } = require('http-errors')

const updateContact = async (req, res) => {
//   try {
//   const { error } = contactSchema.validate(req.body)
//   if (error) {
//     throw new BadRequest('Missing required field')
//   }
  const { id } = req.params
  const result = await contactsOperations.updateContact(id, req.body)
  if (!result) {
    throw new NotFound(`Contact with id = ${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
//   } catch (error) {
//     next(error)
//   }
}
module.exports = updateContact
