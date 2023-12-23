const express = require('express');
const Subject = require('../models/subject');
const router = express.Router();

router.post('/ajout', (req, res) => {

    data = req.body;
    Subject.insertMany(data)
        .then(
            (saved) => {
                res.status(200).send(saved);
            }
        )
        .catch(
            (err) => res.status(401).send(err)
        )
});



module.exports = router;