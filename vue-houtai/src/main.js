// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// axios 做数据请求 this.$http api通信
import VueResource from 'vue-resource'
Vue.use(VueResource)
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)
    // PC VUE 界面框架 特别适合于做后台
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})