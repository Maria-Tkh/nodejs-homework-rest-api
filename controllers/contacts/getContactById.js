const contactsOperations = require('../../model/contacts')
const { NotFound } = require('http-errors')

const getContactById = async (req, res) => {
//   try {
  const { id } = req.params
  const result = await contactsOperations.getContactById(id)
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

module.exports = getContactById
