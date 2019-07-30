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
    question: {},
    searchResults: []
  },
  mutations: {
    setQuestions(state, val) {
      state.questions = val
    },
    setQuestion(state, val) {
      state.question = val
    },
    setSearchResults(state, data) {
      state.searchResults = data
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
    getQuestions({ commit, dispatch }) {
      try {
        questionApi.get('')
          .then(res => {
            commit("setQuestions", res.data)
          })
      } catch (error) {
        console.error(error)
      }
    },
    gradeQuestion({ commit, dispatch }, payload) {
      questionApi.post(`${payload.question._id}/answers`, payload).then().catch(err => console.error(err))
    },
    createQuestion({ commit, dispatch }, payload) {
      try {
        questionApi.post('', payload)
          .then(res => {
            console.log("successss: ", res.data)
            dispatch('getQuestions')
          })
      } catch (error) {
        console.error(error)
      }
    },
    searchQuestions({ commit, dispatch }, payload) {
      try {
        questionApi.put('', payload)
          .then(res => {
            console.log(res.data)
            debugger
            commit('setSearchResults', res.data)
          })
      } catch (error) {
        console.error(error)
      }
    }
  }
})
