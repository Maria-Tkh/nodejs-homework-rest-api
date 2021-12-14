const express = require('express')
const router = express.Router()
const { validation, ctrlWrapper } = require('../../middlewares')
const { joiSchema, statusJoiSchema } = require('../../models/contact')
const { contacts: ctrl } = require('../../controllers')

// const validateMiddleware = validation(contactSchema)

router.get('/', ctrlWrapper(ctrl.listContacts))

router.get('/:id', ctrlWrapper(ctrl.getContactById))

router.post('/', validation(joiSchema), ctrlWrapper(ctrl.addContact))

router.delete('/:id', ctrlWrapper(ctrl.removeContact))

router.put('/:id', validation(joiSchema), ctrlWrapper(ctrl.updateContact))

router.patch('/:id/favorite', validation(statusJoiSchema), ctrlWrapper(ctrl.updateStatusContact))

module.exports = router
