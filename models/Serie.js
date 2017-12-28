const mongoose = require('mongoose');
const serieSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    categorie: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    anneeProd: {
        type: mongoose.Schema.Types.String
    },
    note: {
        type: mongoose.Schema.Types.Number
    },
    episode: [
        {
            duration: {
                type: mongoose.Schema.Types.Number,
                default: 0,
                required: true
            },
            saison: {
                type: Number,
                required: true,
            },
            startTime: {
                type: Date,
                default: Date.now,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model('Serie', serieSchema);