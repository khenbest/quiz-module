import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateQuestion from './views/CreateQuestion.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create-question',
      name: 'createQuestion',
      component: CreateQuestion
    }
  ]
})
