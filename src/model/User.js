const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')
const Role = require('../model/Role')

const User = sequelize.define('user_table', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user: DataTypes.STRING,
  role_id: DataTypes.INTEGER,
  status: DataTypes.TINYINT
})
// 建立关系
User.hasOne(Role, {
  foreignKey: 'id',
  sourceKey: 'role_id'
})
module.exports = User