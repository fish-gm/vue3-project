// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  // 获取用户id对应的购物车数量
  return db.collection('food_menu_shopcart').where({
    userId: event.userId
  }).get();
}