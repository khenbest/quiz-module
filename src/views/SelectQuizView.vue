<template>
  <div class="md-layout md-alignment-center-center">
    <div v-if="selectedQuiz" id="selected"
      class="md-layout-item md-size-100 md-xsmall-size-100 md-alignment-center-center modal">
      <div class="md-layout-item md-size-66 md-xsmall-size-100 md-alignment-center-center md-card">
        <div class="md-toolbar md-table-toolbar md-transparent md-header my-3 md-theme-default md-elevation-0"
          data-background-color="blue">
          <h1 class="md-title" style="color: white !important; text-shadow: gray 0px 1px; font-weight: 500;">Confirm
            Quiz Details</h1>
        </div>
        <div class="md-layout-item md-size-100 md-alignment-center-center">
          <h2>{{activeQuiz.name}}</h2>
        </div>
        <div class="md-layout-item md-size-100 md-alignment-center-center">
          <h3>Topic: {{activeQuiz.topic}}</h3>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-100 md-alignment-center-center">
            <h4>
              <u>Quiz Questions</u>
            </h4>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-33 md-xsmall-size-100 md-alignment-center-center my-2"
                v-for="(question, index) in activeQuiz.questions" :key="question._id">
                <p>{{index + 1}}. {{question.prompt}}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="btn-bar" class="my-2">
          <md-button class="md-info" data-dismiss="modal" @click="go('Quiz')" data-target="#selected">Start Quiz
          </md-button>
          <md-button class="md-warning" data-dismiss="modal" @click="go('CreateQuizView')" data-target="#selected">
            Edit
            Quiz</md-button>
          <md-button class="md-danger" data-dismiss="modal" data-target="#selected">Close</md-button>
        </div>
      </div>
    </div>


    <div class="md-layout-item md-size-66 md-xsmall-size-100">
      <md-table md-card>
        <md-table-toolbar data-background-color="purple">
          <div class="col-10 text-left my-3">
            <h2 class="title" style="color: white !important; text-shadow: gray 0px 1px; font-weight: 500;">
              Quiz Central</h2>
          </div>
          <div class="col-2 addQuiz hover">
            <i id="addQuizIcon" class="text-white fas fa-lg fa-plus" @click="go('CreateQuizView')"></i>
            <div id="quizText">
              Add A Quiz
            </div>
          </div>
        </md-table-toolbar>
        <md-table-row>
          <h4 class="ml-5 text-left">Select A Quiz</h4>
        </md-table-row>
        <md-table-row>
          <md-table-head>Title</md-table-head>
          <md-table-head>Topic</md-table-head>
          <md-table-head>Difficulty</md-table-head>
          <md-table-head>Delete</md-table-head>
          <md-table-head>Edit</md-table-head>
        </md-table-row>
        <md-table-row v-for="quiz in quizzes" data-toggle="modal" data-target="#selected" :key="quiz._id"
          class='text-left hover' @click='selectedQuiz = quiz._id'>
          <md-table-cell>{{ quiz.name }}</md-table-cell>
          <md-table-cell>{{ quiz.topic }}</md-table-cell>
          <md-table-cell>{{ quiz.difficulty }}</md-table-cell>
          <md-table-cell>
            <i class="fas fa-times fa-lg ml-2" @click.stop="deleteQuiz(quiz._id)"></i>
          </md-table-cell>
          <md-table-cell>
            <i class="fas fa-edit text-info"></i>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Question from "@/components/Question.vue";
  import router from "../router.js";
  import delortAlert from '../delortAlert.js'
  export default {
    name: "SelectQuizView",
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
      async deleteQuiz(id) {
        if (await delortAlert.confirm('Quiz')) {
          this.$store.dispatch("deleteQuiz", id)
        }
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

<style scoped>
  .hover {
    cursor: pointer;
  }

  #addQuizIcon {
    margin-left: auto;
    margin-right: auto;
    padding-top: 1em;
    padding-left: 4.15rem;
    color: white;
    visibility: visible !important;
  }

  #quizText {
    margin-left: auto;
    margin-right: auto;
    padding-left: 4.5rem;
  }

  .addQuiz {
    visibility: hidden;
    color: white;
  }

  .addQuiz:hover #quizText {
    visibility: visible;
    cursor: pointer;
  }
</style>