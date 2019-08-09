<template>
  <div class="QuizView">
    <div class="row justify-content-center">
      <md-table md-card class="col-10">
        <md-table-toolbar data-background-color="purple">
          <h1 class="md-title" style="color: white !important; text-shadow: gray 0px 1px; font-weight: 500;">Quiz
            Central</h1>
        </md-table-toolbar>
        <md-table-row>
          <md-table-head>Title</md-table-head>
          <md-table-head>Topic</md-table-head>
          <md-table-head>Difficulty</md-table-head>
          <md-table-head>Delete</md-table-head>
        </md-table-row>
        <md-table-row v-for="quiz in quizzes" class='text-left hover' @click='selectedQuiz = quiz._id'>
          <md-table-cell>{{ quiz.name }}</md-table-cell>
          <md-table-cell>{{ quiz.topic }}</md-table-cell>
          <md-table-cell>{{ quiz.difficulty }}</md-table-cell>
          <md-table-cell>
            <i class="fas fa-ban fa-lg inline-form mr-2 align-self-center" @click="deleteQuiz(quiz._id)"></i>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>

    <div v-if="selectedQuiz" class="row justify-content-center">
      <div class="col-8 md-card">
        <div class="md-toolbar md-table-toolbar md-transparent md-header my-3 md-theme-default md-elevation-0"
          data-background-color="purple">
          <h1 class="md-title" style="color: white !important; text-shadow: gray 0px 1px; font-weight: 500;">Confirm
            Quiz Details</h1>
        </div>
        <div>
          <h2>{{activeQuiz.name}}</h2>
          <h3>
            <u>Quiz Questions</u>
          </h3>
          <div class="row justify-content-center">
            <div class="col-4" v-for="(question, index) in activeQuiz.questions">
              <h6>{{index + 1}}. {{question.prompt}}</h6>
            </div>
          </div>
          <md-button class="md-primary" @click="go('Questions')">Start Quiz</md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Question from "@/components/Question.vue";
  import router from "../router.js";
  export default {
    name: "QuizView",
    data() {
      return {
        selectedQuiz: ""
      };
    },
    mounted() {
      this.$store.dispatch("getQuizzes");
    },
    watch: {
      selectedQuiz: function () {
        this.setActiveQuiz()
      }
    },
    methods: {
      go(pageName) {
        router.push({ name: pageName, params: { id: this.activeQuiz._id } });
      },
      setActiveQuiz() {
        this.$store.dispatch("getActiveQuiz", this.selectedQuiz);
      },
      deleteQuiz(id) {
        this.$store.dispatch("deleteQuiz", id)
      }
    },
    computed: {
      quizzes() {
        return this.$store.state.quizzes;
      },
      activeQuiz() {
        return this.$store.state.activeQuiz;
      }
    },
    components: {
      Question
    }
  };
</script>

<style>
  .hover {
    cursor: pointer;
  }
</style>