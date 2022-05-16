const Sequelize = require('sequelize');

const sequelize = require('../database/conn');

const Product = sequelize.define('products', {

id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    
},

title:{

    type: Sequelize.STRING,
    allowNull: false,
},
price:{

    type: Sequelize.DOUBLE,
    allowNull: false,
},

description:{

    type: Sequelize.STRING,
    allowNull: false,
}

})