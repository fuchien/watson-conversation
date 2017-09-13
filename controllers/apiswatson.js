const defaultJson = require('../config/default.json')
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const ToneAnalyzer = require('./tone')()

function ApisWatsonController() {

    this.toneanalyzer = (req, res, next) => {

        // let username = req.body.username
        // let password = req.body.password
        let text = req.body.text

        ToneAnalyzer.pegarDados(text)
            .then(response => {
                res.status(200).json(response.document_tone.tone_categories[0])
            })
            .catch(error => {
                res.status(400).json(error)
            })
    }
}

module.exports = () => {

    return new ApisWatsonController()
}