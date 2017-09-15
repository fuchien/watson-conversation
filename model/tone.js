module.exports = (sequelize, DataType) => {
    
    // export default (sequelize, DataType) => {
    
        const Tone = sequelize.define('Tone', {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataType.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            password: {
                type: DataType.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            }
        })
    
        return Tone
    }