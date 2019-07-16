import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const questionApi = axios.create({
  baseURL: '//localhost:3000',
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
      questionApi.get('api/questions/').then(res => {
        if (index < res.data.length) {
          let question = res.data[index]
          commit("setQuestions", res.data)
          commit("setQuestion", question)
        }
      }).catch(err => console.error(err))
    }
  }
})
