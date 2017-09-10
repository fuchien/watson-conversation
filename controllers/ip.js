

function IpController() {

    this.validarIp = (req, res, next) => {

        let resp = `<h1>Seu ip é ${req.headers['x-forwarded-for']}</h1>`
        res.send(resp);
    }
}

module.exports = () => {

    return new IpController()
}