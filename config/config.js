module.exports = {
    database: 'conversation',
    username: '',
    password: '',
    params: {
        dialect: 'postgres',
        define: {
            underscored: true
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
}