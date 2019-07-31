<template>
  <div v-if="question.options" class="container-fluid">
    <div class="d-flex row justify-content-center">
      <div class="col-12 justify-content-center">
        <button type="button" @click="getQuestion(0)" class="md-button md-info md-lg md-theme-default">
          <div class="md-ripple">
            <div class="md-button-content">Quiz</div>
          </div>
        </button>
        <!-- <button class="btn btn-primary col-4" @click="getQuestion(1)">Next Question</button> -->
        <button type="button" @click="getQuestion(1)" class="md-button md-primary md-lg md-theme-default">
          <div class="md-ripple">
            <div class="md-button-content">Next Question</div>
          </div>
        </button>
        <div class="d-flex row justify-content-center">
          <div class="col-12">
            <component :is="question.type" :question="question" @submit="gradeQuestion" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Match from "./QuestionTypes/Match"
  import TrueFalse from "./QuestionTypes/TrueFalse"
  import OpenEnded from "./QuestionTypes/OpenEnded"
  import MultipleChoice from "./QuestionTypes/MultipleChoice"
  import FillInTheBlank from "./QuestionTypes/FillInTheBlank"

  export default {
    name: 'Question',
    created() {
      this.$store.dispatch("getQuestion", 0)
    },
    data() {
      return {
        currentQuestion: 0,

      }
    },
    computed: {
      question() {
        return this.$store.state.question
      }
    },
    methods: {
      getQuestion(num) {
        this.currentQuestion += num
        this.$store.dispatch("getQuestion", this.currentQuestion)
      },
      gradeQuestion({ question, submission }) {
        this.$store.dispatch("gradeQuestion", { question, submission })
      }
    },
    components: {
      Match,
      TrueFalse,
      MultipleChoice,
      OpenEnded,
      FillInTheBlank
    }
  }
</script>

</style>