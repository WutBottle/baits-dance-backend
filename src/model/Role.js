const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const Role = sequelize.define('role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  status: DataTypes.TINYINT
})

module.exports = Role