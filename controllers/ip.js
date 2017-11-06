const url = require('url')

function IpController() {

    this.validarIp = (req, res, next) => {

        let resp = `<h1>Seu ip é ${req.headers['x-forwarded-for']} / ${req.headers.host}</h1>`
        console.log(req.headers.host)
        res.send(resp);
    }
}

module.exports = () => {

    return new IpController()
}