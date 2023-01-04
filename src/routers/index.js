import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(VueRouter)

const routes = [
  
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    movieRouter,
    mineRouter,
    cinemaRouter,
    // 重定向到movie防止找不到
    {
      path : '/*',
      redirect : '/movie'
    }
  ]
})


