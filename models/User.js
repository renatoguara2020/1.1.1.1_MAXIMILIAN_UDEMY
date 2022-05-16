const {DataTypes} = require('sequelize');
const sequelize = require('../database/conn');

const conn = require('../database/conn');

const User = conn.define('User', {

    name:{

        type: DataTypes.STRING,
        allowNull: false,
        isEmpty: false,

    },
    occupation:{

        type: DataTypes.STRING,
        isEmpty: false,
        allowNull: false,

    },

    newsLetter: {
        type: DataTypes.BOOLEAN,

    },
})
//sequelize.sync({alter:true})
module.exports = User;
