const defaultJson = require('../config/default.json')
const ToneAnalyzer = require('./tone')
const datasource = require('../config/datasource')()
const Tone = datasource.models.Tone

function ApisWatsonController() {

    this.addCrediciaisTone = (req, res, next) => {

        // ToneAnalyzer.pegarDados(text)
        //     .then(response => {
        //         res.status(200).json({
        //             res: response.document_tone.tone_categories[0],
        //             msg: 'Enviado com sucesso!'
        //         })
        //     })
        //     .catch(error => {
        //         res.status(400).json(error)
        //     })

        Tone.create({
            username: req.body.username,
            password: req.body.password
        }).then(resp => {
            console.log(res)
            res.status(200).json({
                msg: 'Enviado com sucesso!',
                resp: resp
            })
        }).catch(err => {
            res.status(400).json({msg: 'Erro ao enviar as credenciais'})
        })
    }

    this.pegarCredenciaisTone = (req, res, next) => {

        Tone.findAll()
            .then(credencial => {
                let num = credencial.length
                res.status(200).json(credencial[num-1])
            })
            .catch(err => {
                res.status(400).json({
                    err: err,
                    msg: 'Sem credencial'
                })
            })
    }
}

module.exports = () => {

    return new ApisWatsonController()
}