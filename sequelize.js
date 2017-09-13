const Sequelize = require('sequelize')

const connection = new Sequelize('conversation', 'postgres', '1234', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})

const Users = connection.define('users', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT
})

connection.sync().then(() => {
    // Users.create({
    //     title: 'DEMO',
    //     body: 'LOREM IPSUM'
    // })
    // Users.findAll({}).then((user) => {
    //     console.log(user[0])
    // })
    Users.findOne({title: 'DEMO'}).then((user) => {
        console.log(user)
    })
})