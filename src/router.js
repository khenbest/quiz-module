import Vue from 'vue'
import Router from 'vue-router'
import CreateQuizView from './views/CreateQuizView.vue'
import CreateQuestion from './views/CreateQuestion.vue'
import QuestionView from './views/QuestionView.vue'
import SelectQuizView from './views/SelectQuizView.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/create-quiz',
      name: 'CreateQuizView',
      component: CreateQuizView
    },
    {
      path: '/create-question',
      name: 'createQuestion',
      component: CreateQuestion
    },
    {
      path: '/questions',
      name: 'Questions',
      component: QuestionView
    },
    {
      path: '/select-quiz',
      name: 'QuizCreator',
      component: SelectQuizView
    },
  ]
})
