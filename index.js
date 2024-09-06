const Koa = require('koa')
const mysql = require('mysql2/promise')
const app = new Koa()

// 创建数据库连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'dance',
})
// 中间件来处理数据库操作
app.use(async (ctx, next) => {
  try {
    // 从连接池中获取一个连接
    const [rows, fields] = await pool.execute('SELECT * FROM user_table')
    ctx.body = rows // 将查询结果发送给客户端
  } catch (err) {
    console.error(err)
    ctx.status = 500
    ctx.body = 'Server error'
  } finally {
    await next()
  }
})

// 启动Koa服务器
const port = 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
