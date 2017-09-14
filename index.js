const app = require('./app')

// console.log(app.datasource.models)
app.listen(app.get('port'), () => {
    console.log('Server running on port ' + app.get('port'))
})