const Sequelize = require('sequelize')
const config = require('./config')

let sequelize = null

module.exports = () => {

    if (!sequelize) {

        sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        )
    }

    return sequelize
}