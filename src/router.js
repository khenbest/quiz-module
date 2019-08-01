import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateQuestion from './views/CreateQuestion.vue'
import CreateTest from './views/CreateTest.vue'
import QuestionView from './views/QuestionView.vue'
import QuizView from './views/QuizView.vue'


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
    },
    {
      path: '/create-test',
      name: 'createTest',
      component: CreateTest
    },
    {
      path: '/questions-test',
      name: 'Questions',
      component: QuestionView
    },
    {
      path: '/quiz-creator',
      name: 'QuizCreator',
      component: QuizView
    },
  ]
})
