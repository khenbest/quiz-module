<template>
  <div class="container-fluid">

    <button @click="alert">test</button>

    <div class="md-card md-theme-default">
      <div class="md-card-header" data-background-color="blue">
        <h4 class="title">Question {{currentQuestion + 1}} out of {{questions.length}}</h4>
      </div>
      <div class="md-card-content">
        <div class="md-layout ">

          <component v-if="questions" :is="questions[currentQuestion].type" :question="questions[currentQuestion]"
            @submit="gradeQuestion" />

          <div class="md-layout-item md-size-100 text-center">
            <button type="button" class="md-button md-raised md-info md-theme-default" @click="nextQuestion">
              <div class="md-ripple">
                <div class="md-button-content">Next Question</div>
              </div>
            </button>
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
  import gradeAlert from "../gradeAlerts.js"

  export default {
    name: "Question",
    created() {
    },
    data() {
      return {
        currentQuestion: 0,
      };
    },

    computed: {
      questions() {
        let quiz = this.$store.state.activeQuiz
        return quiz.questions
      },
      grade() {
        return this.$store.state.grade
      }
    },
    methods: {
      alert() {
        this.$swal({
          title: gradeAlert.isCorrect(this.grade),
          html: gradeAlert.determineAlert(this.grade),
          type: gradeAlert.isSuccess(this.grade),
          showCloseButton: true,
          confirmButtonColor: "#fb8c00"

        });
      },
      nextQuestion() {
        this.currentQuestion += 1;
      },
      gradeQuestion({ question, submission }) {
        this.$store.dispatch("gradeQuestion", { question, submission });
      }
    },
    components: {
      Match,
      TrueFalse,
      MultipleChoice,
      OpenEnded,
      FillInTheBlank,
    }
  };
</script>