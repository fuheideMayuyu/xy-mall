import Vue from 'vue'
import App from './App'
import './common/style/reset.css'
import './common/style/common.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/home/main', // 首页
      'pages/category/main', // 分类
      'pages/user/main', // 个人中心
      'pages/cart/main', // 购物车
      'pages/goodsFilter/main', // 分类筛选
      'pages/orderSubmit/main', // 订单待提交
      'pages/orderPay/main', // 订单待支付详情页
      'pages/waitGoods/main', // 订单待发货详情页
      'pages/alreadyGoods/main', // 订单已发货详情页
      'pages/successGoods/main', // 交易已完成详情页
      'pages/orderShutInfo/main', // 交易关闭详情页
      'pages/address/main', // 新增收货地址
      'pages/editAddress/main', // 编辑收货地址
      'pages/allOrderList/main', // 查看全部订单
      'pages/waitPayList/main', // 查看待付款订单列表
      'pages/waitShipList/main', // 查看待发货订单列表
      'pages/alreadyShipList/main', // 查看已发货订单列表
      'pages/orderSuccessList/main', // 查看已完成订单列表
      'pages/logisticsInfo/main' // 物流信息页
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '行云商城',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#FF66A6',
      borderStyle: 'white',
      backgroundColor: '#f8f9fb',
      list: [
        {
          text: '首页',
          pagePath: 'pages/home/main',
          iconPath: 'static/images/icon-img/home.png',
          selectedIconPath: 'static/images/icon-img/home-active.png'
        },
        {
          text: '分类',
          pagePath: 'pages/category/main',
          iconPath: 'static/images/icon-img/category.png',
          selectedIconPath: 'static/images/icon-img/category-active.png'
        },
        {
          text: '购物车',
          pagePath: 'pages/cart/main',
          iconPath: 'static/images/icon-img/cart.png',
          selectedIconPath: 'static/images/icon-img/cart-active.png'
        },
        {
          text: '我的',
          pagePath: 'pages/user/main',
          iconPath: 'static/images/icon-img/user.png',
          selectedIconPath: 'static/images/icon-img/user-active.png'
        }
      ]
    }
  }
}
