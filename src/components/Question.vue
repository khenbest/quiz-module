<template>
  <div v-if="question.options" class="container-fluid">
    <div class="d-flex row justify-content-center">
      <div class="col-12 justify-content-center">
        <button class="btn btn-dark col-4 mr-1" @click="getQuestion(0)">Start Quiz</button>
        <button class="btn btn-primary col-4" @click="getQuestion(1)">Next Question</button>
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

  export default {
    name: 'HelloWorld',
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
      TrueFalse
    }
  }
</script>

</style>