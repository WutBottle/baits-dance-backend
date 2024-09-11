const BaseController = require("./BaseController");
const UserModel = require('../model/User.js')
const Role = require('../model/Role.js')
class UserController extends BaseController {
  static async getUser(ctx) {
    // let sql = 'select * from user where status = 1'
    // const res = await db.query(sql)
    const res = await UserModel.findAll({
      attributes: ['user_table', 'user_id'],
      include: {
        model: Role
      },
      limit: 1  //分页
    })
    ctx.body = BaseController.renderJsonSuccess(200, '查询成功', res)
  }

  static async getCurrectUser(ctx) {
    const id = ctx.params.id
    let msg = '输入错误'
    let code = 200
    if (parseInt(id) === 666) {
      msg = '输入正确'
    }
    ctx.body = BaseController.renderJsonSuccess(code, msg, id)
  }

}

module.exports = UserController