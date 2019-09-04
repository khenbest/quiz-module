<template>
  <div class="md-layout md-alignment-center-center">
    <QuizModal :activeQuiz="activeQuiz"></QuizModal>

    <div class="md-layout-item md-size-66 md-xsmall-size-100">
      <md-table md-card>
        <md-table-toolbar data-background-color="purple">
          <div class="md-layout-item md-size-66 md-xsmall-size-66 text-left my-3">
            <h2 class="title" style="color: white !important; text-shadow: gray 0px 1px; font-weight: 500;">
              Quiz Central</h2>
          </div>
          <div class="md-layout-item md-size-33 md-xsmall-size-33 mt-3 text-right addQuiz hover">
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
          class='text-left hover' @click=setActiveQuiz(quiz)>
          <md-table-cell>{{ quiz.name }}</md-table-cell>
          <md-table-cell>{{ quiz.topic }}</md-table-cell>
          <md-table-cell>{{ quiz.difficulty }}</md-table-cell>
          <md-table-cell>
            <i class="fas fa-times fa-lg ml-2" @click.stop="deleteQuiz(quiz._id)"></i>
          </md-table-cell>
          <md-table-cell>
            <i class="fas fa-edit text-info" @click="edit('CreateQuizView', quiz._id)"></i>
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
  import QuizModal from '@/components/QuizModal.vue'
  export default {
    name: "SelectQuizView",
    data() {
      return {
        activeQuiz: {}
      };
    },
    mounted() {
      this.$store.dispatch("getQuizzes");
    },
    methods: {
      go(pageName) {
        router.push({ name: pageName, params: { id: 'new-quiz' } });
      },
      edit(pageName, id) {
        router.push({ name: pageName, params: { id: id } })
      },
      setActiveQuiz(quiz) {
        this.activeQuiz = quiz
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
    },
    components: {
      Question,
      QuizModal
    }
  };
</script>

<style scoped>
  .hover {
    cursor: pointer;
  }

  #addQuizIcon {
    color: white;
    visibility: visible !important;
  }

  .addQuiz {
    align-items: center;
    justify-content: flex-end;
    visibility: hidden;
    color: white;
  }

  .addQuiz:hover #quizText {
    visibility: visible;
    cursor: pointer;
  }
</style>