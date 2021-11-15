const router = require('express').Router();
const Contact = require('../models/contact');

router.route('/contact').get((req, res) => {
    Contact.find()
    .then((contact) => res.json(contact))
    .catch(err => console.log(err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const newContacts = new Contact({
        name: name,
        email: email,
        subject: subject,
        message: message
    });

    newContacts.save()
    .then(() => res.json('Contact form added!'))
    .catch(err => res.json(`Error: ${err}`));

});

module.exports = router;