<template>
  <div class="container-fluid">
    <div class="d-flex row justify-content-center">
      <div class="col-12 justify-content-center">
        <button @click="getQuestion(1)" type="button" class="md-button md-lg md-info">
          <div class="md-ripple ">
            <div class="md-button-content">Next Question</div>
          </div>
        </button>
        <button @click="alert">test</button>
        <component v-if="questions" :is="questions[currentQuestion].type" :question="questions[currentQuestion]"
          @submit="gradeQuestion" />
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
    // watch: {
    //   this.grade: function () {
    //     this.alert()
    //   }
    // },
    computed: {
      questions() {
        let quiz = this.$store.state.activeQuiz
        return quiz.questions
      },
      grade() {
        debugger
        return this.$store.state.grade

      }
    },
    methods: {
      alert() {
        this.$swal({
          // title: 'Required Category',
          html: gradeAlert.determineAlert(this.grade),
          type: 'success',
          showCloseButton: true,
          confirmButtonColor: "#fb8c00"

        });
      },
      // matchText() {
      //   let out = ''
      //   this.grade.correct.forEach(elem => {
      //     out += "<p>" + elem.value + ": " + elem.definition + "</p>"
      //   })
      //   console.log(out)
      //   return out
      // },

      getQuestion(num) {
        this.currentQuestion += num;
      },
      async gradeQuestion({ question, submission }) {
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