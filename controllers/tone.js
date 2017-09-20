const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const Tone = require('../services/tone')()

const tone_analyzer = null

function ToneAnalyzer() {

    this.pegarDados = (req, res, next) => {
        
        let text = req.body.text
        let params = {
            // Get the text from the JSON file.
            text: text,
            tones: 'emotion'
        };

        Tone.tone(params, function(error, response) {
            
            if (error) {

                console.log('error:', error);
                res.status(400).json({
                    resp: error,
                    msg: 'Erro ao pegar os dados'
                })
            }
            else {

                console.log(JSON.stringify(response, null, 2));
                res.status(200).json({
                    resp: response
                })
            }
        });
    }
}

module.exports = () => {
    
    return new ToneAnalyzer()
}