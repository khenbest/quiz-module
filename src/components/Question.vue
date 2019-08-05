<template>
  <div class="container-fluid">
    <div class="d-flex row justify-content-center">
      <div class="col-12 justify-content-center">
        <button @click="getQuestion(1)" type="button" class="md-button md-lg">
          <div class="md-ripple blackBtn">
            <div class="md-button-content">Next Question</div>
          </div>
        </button>
        <div class="d-flex row justify-content-center">
          <div class="col-12">
            <component :is="questions[currentQuestion].type" :question="questions[currentQuestion]"
              @submit="gradeQuestion" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Match from "./QuestionTypes/Match";
  import TrueFalse from "./QuestionTypes/TrueFalse";
  import OpenEnded from "./QuestionTypes/OpenEnded";
  import MultipleChoice from "./QuestionTypes/MultipleChoice";
  import FillInTheBlank from "./QuestionTypes/FillInTheBlank";

  export default {
    name: "Question",
    created() {
      // this.$store.dispatch("getQuestion", 0);
    },
    data() {
      return {
        grade: {},
        currentQuestion: 0,
      };
    },
    computed: {
      questions() {
        let quiz = this.$store.state.activeQuiz
        return quiz.questions
      }
    },
    methods: {
      getQuestion(num) {
        this.currentQuestion += num;
      },
      gradeQuestion({ question, submission }) {
        this.$store.dispatch("gradeQuestion", { question, submission });
        this.grade = this.$store.state.grade
      }
    },
    components: {
      Match,
      TrueFalse,
      MultipleChoice,
      OpenEnded,
      FillInTheBlank
    }
  };
</script>