const {DataTypes} = require('sequelize');
const sequelize = require('../database/conn');

const conn = require('../database/conn');

const User = conn.define('User', {

     id:{

        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

     },

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

    dataNascimento:{

        type: DataTypes.DATE,
        
    },
})
//sequelize.sync({force:true})
module.exports = User;
