import Vue from 'vue'
import App from './App'
import './common/style/reset.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/home/main', 'pages/category/main', 'pages/user/main', 'pages/cart/main', 'pages/goodsFilter/main'],
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
