import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const questionApi = axios.create({
  baseURL: '//localhost:3000/api/questions/',
  timeout: 5000
})
const quizApi = axios.create({
  baseURL: '//localhost:3000/api/quizzes',
  timeout: 5000
})


export default new Vuex.Store({
  state: {
    questions: [],
    question: {},
    searchResults: [],
    quizzes: [],
    activeQuiz: {}
  },
  mutations: {
    setQuestions(state, data) {
      state.questions = data
    },
    setQuestion(state, data) {
      state.question = data
    },
    setSearchResults(state, data) {
      state.searchResults = data
    },
    setQuizzes(state, data) {
      state.quizzes = data
    },
    setActiveQuiz(state, data) {
      state.activeQuiz = data
    }
  },
  actions: {
    //#region Questions
    getQuestion({ commit, dispatch }, index) {
      try {
        questionApi.get('').then(res => {
          if (index < res.data.length) {
            let question = res.data[index]
            commit("setQuestions", res.data)
            commit("setQuestion", question)
          }
        })
      } catch (error) {
        console.error(error)
      }
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
      try {
        questionApi.post(`${payload.question._id}/answers`, payload)
      } catch (error) {
        console.error(error)
      }
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
            commit('setSearchResults', res.data)
          })
      } catch (error) {
        console.error(error)
      }
    },
    //#endregion 
    //#region Quizzes
    createQuiz({ commit, dispatch }, payload) {
      try {
        quizApi.post('', payload)
          .then(res => {
            console.log("successss: ", res.data)
          })
      } catch (error) {
        console.error(error)
      }
    },
    getActiveQuiz({ commit, dispatch }, payload) {
      try {
        quizApi.get(`${payload}`).then(res => {
          commit('setActiveQuiz', res.data)
        })
      } catch (error) {
        console.error(error)
      }
    },
    getQuizzes({ commit, dispatch }) {
      try {
        quizApi.get('')
          .then(res => {
            commit('setQuizzes', res.data)
          })
      } catch (error) {
        console.error(error)
      }
    }

    //#endregion 
  }
})
