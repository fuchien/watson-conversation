const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')
// const app = require('../app')
const config = require('./config')

// let sequelize = null
let database = null

const loadModels = (sequelize) => {
    const dir = path.join(__dirname, '../model')
    const models = []
    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file)
        const model = sequelize.import(modelDir)
        models[model.name] = model
    })
    return models
}

module.exports = () => {

    if (!database) {
        // const config = app.config,
        sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        database = {
            sequelize,
            Sequelize,
            models: {}
        };

        database.models = loadModels(sequelize)

        sequelize.sync().done(() => {
            return database;
        });
    }

    return database;
}

// module.exports = () => {

//     if (!sequelize) {

//         sequelize = new Sequelize(
//             config.database,
//             config.username,
//             config.password,
//             config.params
//         )
//     }

//     return sequelize
// }