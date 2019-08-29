import Vue from 'vue'
import Router from 'vue-router'
import QuizView from './views/QuizView.vue'
import CreateQuizView from './views/CreateQuizView.vue'
import CreateQuestion from './views/CreateQuestion.vue'
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
      path: '/create-quiz',
      name: 'CreateQuizView',
      component: CreateQuizView
    },
    {
      path: '/create-question',
      name: 'CreateQuestion',
      component: CreateQuestion
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
