const Router = require("koa-router")
const router = new Router()

const UserController = require('../controller/User.js')
const RoleController = require('../controller/Role.js')


router.get('/', ctx => { ctx.body = "我最帅!" })
router.get('/user', UserController.getUser)
router.get('/user/:id', UserController.getCurrectUser)



router.get('/role', RoleController.getRole)
router.post('/role', RoleController.getCurrectRole)


module.exports = router