import Vue from 'vue'
import Router from 'vue-router'
import QuizView from './views/QuizView.vue'
import CreateQuizView from './views/CreateQuizView.vue'
import SelectQuizView from './views/SelectQuizView.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SelectQuiz',
      component: SelectQuizView
    },
    {
      path: '/create-quiz/:id',
      name: 'CreateQuizView',
      props: true,
      component: CreateQuizView
    },

    {
      path: '/quiz/:id',
      name: 'Quiz',
      props: true,
      component: QuizView
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
