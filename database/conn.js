const Sequelize = require('sequelize');

const sequelize = new Sequelize('maxxi_udemy', 'root', '',{

    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;