// module.exports = {
//     database: 'conversation',
//     username: '',
//     password: '',
//     params: {
//         dialect: 'postgres',
//         define: {
//             underscored: true
//         },
//         pool: {
//             max: 5,
//             min: 0,
//             idle: 10000
//         }
//     }
// }
module.exports = {
    database: 'conversation',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'users.sqlite',
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