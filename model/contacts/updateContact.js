// const fs = require('fs/promises')
// const contactsPath = require('./contactsPath')
const updateContacts = require('./updateContacts')
const listContacts = require('./listContacts')

const updateContact = async (id, data) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => item.id === id)
  if (idx === -1) {
    return null
  }
  contacts[idx] = { id, ...data }
  await updateContacts(contacts)
  return contacts[idx]
  // await fs.writeFile(contactsPath, JSON.stringify(contacts))
}

module.exports = updateContact
