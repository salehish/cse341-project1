const router = require('express').Router();
const Contact = require('../models/Contacts'); // make sure this exists

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    if (err.kind === 'ObjectId') return res.status(400).json({ message: 'Invalid ID' });
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;