const watson = require('watson-developer-cloud');
const defaultJson = require('../config/default.json')

function ConversationController() {

    this.enviarDados = (req, res, next) => {

        const conversation = new watson.ConversationV1({
            username: defaultJson.conversation.username,
            password: defaultJson.conversation.password,
            version_date: '2017-05-26'
        });
    
        // Replace with the context obtained from the initial request
        // console.log(req.body)
        let context = req.body.context
        let text = req.body.input
        let login = req.body.login
    
        conversation.message({
            workspace_id: defaultJson.conversation.workspace_id,
            input: text,
            context: context
        },  function(err, response) {
            if (err) {
                console.log('error:', err);
            } else {

                response.output.text[0] = response.output.text[0].replace('Hi.', `Hi ${login.nome}.`)
                res.status(200).json(response)
            }
        });
    }
}

module.exports = () => {

    return new ConversationController()
}