const nodemailer = require('nodemailer')

function FormularioController() {

    this.enviarDados = (req, res, next) => {

        let data = req.body;

        let smtpTransport = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            auth: {
                user: "testalvorada@gmail.com",
                pass: "testalvorada2017"
            }
        });

        let mailOptions = { //email options
            from: "testalvorada@gmail.com",
            to: "fuchienhsu12@gmail.com", // receiver
            subject: `Site (${data.nome} / ${data.titulo}) `, // subject
            html: `
                <h3>Título: ${data.titulo}</h3>
                <h4>Enviado de: ${data.nome} / ${data.email}</h4>
                <p>Mensagem:</p>
                <p>${data.mensagem}</p>
            `
        }

        smtpTransport.sendMail(mailOptions, (error, response) => { //callback
            if (error) {
                console.log(error);
                res.json({error: "API Error!"})
            } else {
                res
                    .status(200)
                    .json({msg: "Mensagem enviada com sucesso!"});
            }

            smtpTransport.close();
        });
    }
}

module.exports = () => {

    return new FormularioController()
}