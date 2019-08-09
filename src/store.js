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
    searchResults: [],
    quizzes: [],
    activeQuiz: {},
    grade: {}
  },
  mutations: {

    removeQuestion(state, id) {
      let deleted = state.searchResults.find(q => q._id == id)
      let index = state.searchResults.indexOf(deleted)
      state.searchResults.splice(index, 1)
    },
    setSearchResults(state, data) {
      state.searchResults = data
    },
    setQuizzes(state, data) {
      state.quizzes = data
    },
    setActiveQuiz(state, data) {
      state.activeQuiz = data
    },
    setGrade(state, data) {
      state.grade = data
    },
    removeQuiz(state, id) {
      let deleted = state.quizzes.find(q => q._id == id)
      let index = state.quizzes.indexOf(deleted)
      state.quizzes.splice(index, 1)
    }
  },
  actions: {

    getQuestions({ commit, dispatch }) {
      try {
        questionApi.get('')
          .then(res => {
            commit("setSearchResults", res.data)
          })
      } catch (error) {
        console.error(error)
      }
    },
    gradeQuestion({ commit, dispatch }, payload) {
      try {
        // debugger
        questionApi.post(`${payload.question._id}/answers`, payload)
          .then(res => {
            // debugger
            console.log(res.data)
            commit('setGrade', res.data)
            payload.alert()
          })
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
    deleteQuestion({ commit, dispatch }, payload) {
      try {
        questionApi.delete(payload)
          .then(res => {
            console.log('delorted!')
            commit('removeQuestion', payload)
          })
      } catch (error) {
        console.error(error)
      }
    },
    //#endregion 
    //#region Quizzes
    createQuiz({ commit, dispatch }, payload) {
      try {
        quizApi.post('', payload.quiz)
          .then(res => {
            console.log("successss: ", res.data)
            payload.alert()
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
    },
    deleteQuiz({ commit, dispatch }, payload) {
      try {
        quizApi.delete(payload)
          .then(res => {
            console.log('delorted quiz!')
            commit('removeQuiz', payload)
          })
      } catch (error) {
        console.error(error)
      }
    }

    //#endregion 
  }
})
