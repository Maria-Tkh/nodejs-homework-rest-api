const express = require('express')
const router = express.Router()
// const createError = require('http-errors')
const { NotFound } = require('http-errors')
const Joi = require('joi')

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
})

const contactsOperations = require('../../model/contacts')

router.get('/', async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts()
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: contacts
      }
    })
    // res.json({ message: 'template message' })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Server error'
    })
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await contactsOperations.getContactById(id)
    if (!result) {
      // throw createError(404, `Contact with id = ${contactId} not found`)
      throw new NotFound(`Contact with id = ${id} not found`)
      // res.status(404).json({
      //   status: 'error',
      //   code: 404,
      //   message: `Contact with id = ${contactId} not found`
      // })
      // return
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
    // res.json({ message: 'template message' })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body)
    if (error) {
      error.status = 400
      throw error
    }
    const result = await contactsOperations.addContact(req.body)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
    // res.json({ message: 'template message' })
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await contactsOperations.removeContact(id)
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
  } catch (error) {
    next(error)
  }
  // res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body)
    if (error) {
      error.status = 400
      throw error
    }
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
  } catch (error) {
    next(error)
  }
  // res.json({ message: 'template message' })
})

module.exports = router
