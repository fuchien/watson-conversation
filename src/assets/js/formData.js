$(function () {
    $("#contact_form").validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            titulo: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, informe seu nome",
                minlength: "O nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "É necessário informar um email",
                email: "Por favor, informe um e-mail válido"
            },
            titulo: {
                required: "É necessário informar um título"
            },
            mensagem: {
                required: "A mensagem não pode ficar em branco"
            }
        },
        submitHandler: () => {

            let $ = document
                .querySelector
                .bind(document);
            let inputEmail = $('#email');
            let inputNome = $('#nome');
            let inputTitulo = $('#titulo');
            let inputMensagem = $('#mensagem');
            let enviar = $('.enviar');

            _disable()

            enviar.innerHTML = 'Enviando... <i class="spin fa fa-refresh">';
            let body = {
                email: inputEmail.value,
                nome: inputNome.value,
                titulo: inputTitulo.value,
                mensagem: inputMensagem.value
            };

            // usando nosso serviço
            // let url = 'http://localhost:3000/formulario'
            let url = '/formulario'
            new HttpService()
                .post(url, body)
                .then((msg) => {
                    _limpa()
                    _msg('success', msg.msg)
                    _removeDisable()
                })
                .catch(err => {
                    _msg('danger', 'Não foi possível enviar a mensagem! Tente mais tarde.');
                    enviar.removeAttribute('disabled');
                });

            function _msg(tipo, msg) {

                $('.msg')
                    .innerHTML = `<span class="alert alert-${tipo}">${msg}<span>`;
                setTimeout(function () {
                    $(".msg").innerHTML = '';
                }, 4000);
                enviar.innerHTML = 'ENVIAR <span class="glyphicon glyphicon-send"></span>';
            }

            function _limpa() {

                inputEmail.value = '';
                inputNome.value = '';
                inputTitulo.value = '';
                inputMensagem.value = '';
            }

            function _disable() {

                inputEmail.setAttribute('disabled', 'disabled');
                inputNome.setAttribute('disabled', 'disabled');
                inputTitulo.setAttribute('disabled', 'disabled');
                inputMensagem.setAttribute('disabled', 'disabled');
                enviar.setAttribute('disabled', 'disabled');
            }

            function _removeDisable() {

                inputEmail.removeAttribute('disabled');
                inputNome.removeAttribute('disabled');
                inputMensagem.removeAttribute('disabled');
                inputTitulo.removeAttribute('disabled');
                enviar.removeAttribute('disabled');
            }
        }
    });
});