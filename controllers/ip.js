const url = require('url')

function IpController() {

    this.validarIp = (req, res, next) => {

        let resp = `<h1>Seu ip é ${req.headers['x-forwarded-for']} / ${req.general}</h1>`
        console.log(req.general)
        res.send(resp);
    }
}

module.exports = () => {

    return new IpController()
}