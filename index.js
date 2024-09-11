const Koa = require('koa')
const app = new Koa()

const router = require("./src/router/router.js")
const { koaBody } = require('koa-body');

app.use(koaBody({
  enableTypes: ['json', 'form', 'text'],
  multipart: true // 是否支持 multipart-formdate 的表单
}));

/**
 * router.routers() 启动路由
 * router.allowedMethods() 运行任何请求 --- get/post/put/delete等
 */
app.use(router.routes(), router.allowedMethods())

// 启动Koa服务器
const hostName = '0.0.0.0'; //ip
const port = 3000; //端口
app.listen(port, hostName, () => {
  console.log('运行网址：http://localhost:3030');
})

