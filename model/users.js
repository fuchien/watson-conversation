module.exports = (sequelize, DataType) => {
    
    // export default (sequelize, DataType) => {
    
        const Users = sequelize.define('Users', {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataType.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            cpf: {
                type: DataType.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            admin: {
                type: DataType.STRING
            },
            descricao: {
                type: DataType.STRING
            }
        })
    
        return Users
    }