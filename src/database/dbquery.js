
const mysql = require('mysql2')
const config = require("./config")

const pool = mysql.createPool({
  host: config.host,      //地址
  port: config.port,      //端口号
  user: config.username,       //用户名
  password: config.password,    //密码
  database: config.database,    //数据库名
})

exports.query = function (sql) {
  return new Promise((resolve, reject) => {
    pool.execute(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    })
  })
}