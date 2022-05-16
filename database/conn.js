const Sequelize = require('sequelize');



const sequelize = new Sequelize('maxxi_udemy', 'root', '',{

    dialect: 'mysql',
    host: 'localhost',
});

// try {
//     sequelize.authenticate()
//     console.log("Conectamos com o Sequelize")
// } catch (error) {
//     console.error(error)
// }

module.exports = sequelize;