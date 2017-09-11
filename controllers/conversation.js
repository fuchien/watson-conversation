const watson = require('watson-developer-cloud');

function ConversationController() {

    this.enviarDados = (req, res, next) => {

        const conversation = new watson.ConversationV1({
            username: '21d73950-9a86-4404-a3da-637ec910e2a4',
            password: 'mPSElIYvGjBb',
            version_date: '2017-05-26'
        });
    
        // Replace with the context obtained from the initial request
        console.log(req.body)
        let context = req.body.context
        let text = req.body.input
        let nome = req.body.nome
    
        conversation.message({
            workspace_id: '4631a90b-ee59-4e3f-bb27-3a2297f297a2',
            input: text,
            context: context
        },  function(err, response) {
            if (err) {
                console.log('error:', err);
            } else {
                console.log(response.output.text[0]);
                response.output.text[0] = response.output.text[0].replace('Hi.', `Hi ${nome}.`)
                console.log(response.output.text[0]);
                res.status(200).json(response)
            }
        });
    }
}

module.exports = () => {

    return new ConversationController()
}