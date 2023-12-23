const mongoose = require('mongoose');

const Reclamation = mongoose.model('Reclamation', {
    clientInfo: {
        name: {
            type: String
        },
        lastname: {
            type: String
        },
        birthdate: {
            type: String 
        },
        civility: {
            type: String
        },
        phone: {
            type: Number
        },
        CIN: {
            type: Number
        },
        RIB: {
            type: Number
        }
    },
    subject: {
        type: String
    },
    RecDetails: {
        type: String
    },
    attachement: {
        type: String
    }
})

module.exports = Reclamation;