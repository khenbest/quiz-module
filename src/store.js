import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const questionApi = axios.create({
  baseURL: '//localhost:3000/api/questions/',
  timeout: 5000
})
export default new Vuex.Store({
  state: {
    questions: [],
    question: {}
  },
  mutations: {
    setQuestions(state, val) {
      state.questions = val
    },
    setQuestion(state, val) {
      state.question = val
    }
  },
  actions: {
    getQuestion({ commit, dispatch }, index) {
      questionApi.get('').then(res => {
        if (index < res.data.length) {
          let question = res.data[index]
          commit("setQuestions", res.data)
          commit("setQuestion", question)
        }
      }).catch(err => console.error(err))
    },
    gradeQuestion({ commit, dispatch }, payload) {
      questionApi.post(`${payload.question._id}/answers`, payload).then(res => {
        console.log(res.data)
      }).catch(err => console.error(err))
    }
  }
})
