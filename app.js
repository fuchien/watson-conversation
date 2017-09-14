const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
// const config = require('./config/database');
const defaultJson = require('./config/default.json')
const config = require('./config/config')
const datasource = require('./config/datasource')

const port = process.env.PORT || defaultJson.environment.port
const app = express()
app.set('port', port)
// app.config = config
// app.datasource = datasource(app)

// Connect To Database
// mongoose.createConnection(config.database);

// On Connection
// mongoose.connection.on('connected', () => {
//   console.log('Connected to database '+config.database);
// });

// On Error
// mongoose.connection.on('error', (err) => {
//   console.log('Database error: '+err);
// });

app.use(express.static(path.join(__dirname, 'dist')))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', require('./routes'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

module.exports = app