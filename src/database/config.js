const database = {
  host: 'localhost',
  port: '3306',
  database: 'dance',
  username: 'root',
  password: process.env.MYSQL_PASSWORD,
}

module.exports = database;