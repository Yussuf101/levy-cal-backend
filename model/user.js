const { DataTypes } = require("sequelize");
const { connection } = require("../db");

const User = connection.define( "User", {
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    indexes: [{unique: true, fields: ['email']}]
  }
);

module.exports = User;