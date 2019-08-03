<template>
  <div class="home">
    <searchQuestion></searchQuestion>

    <!-- create quiz section by tags -->
    <div class="row justify-content-center mb-0">
      <!--table needs v-model both places DON'T delete one-->
      <md-table class="col-8" v-model="newQuiz.questions" md-card>
        <md-table-toolbar class="md-header my-3" data-background-color="blue">
          <h1 class="md-title" style="color:white !important; text-shadow: gray 0 1px; font-weight: 500;">Questions</h1>
        </md-table-toolbar>
        <md-content class="md-scrollbar">
          <md-table-row v-for="question in results">
            <md-table-cell md-label="Prompt">{{ question.prompt }}
            </md-table-cell>
            <md-table-cell md-label="Type">{{ question.type }}</md-table-cell>
            <md-table-cell md-label="Categories">{{ prettify(question.categories) }}
            </md-table-cell>
            <md-table-cell md-label="Selected">
              <md-checkbox v-model="newQuiz.questions" :value="question">
                <!--table needs v-model both places DON'T delete one-->
              </md-checkbox>
            </md-table-cell>
          </md-table-row>
        </md-content>
      </md-table>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 md-card">
        <md-field md-clearable md-inline>
          <label>Enter Quiz Name here</label>
          <md-input v-model="newQuiz.name"></md-input>
        </md-field>
        <h3><u>Quiz Questions</u></h3>
        <div class="row justify-content-center">
          <div class="col-4" style="display: inline-block;" v-for="(question, index) in newQuiz.questions">
            <h6 class="text-truncate">{{index + 1}}. {{question.prompt}}</h6>
          </div>
        </div>
        <md-button @click="createQuiz" class="md-ripple md-primary col-4 my-2">
          Submit
        </md-button>
      </div>
    </div>
    <!--  create quiz section by tags -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavButtons from '@/components/NavButtons.vue'
  import Question from "@/components/Question.vue";
  import SearchQuestion from '@/components/SearchQuestions.vue'
  import router from "../router.js";
  export default {
    name: "home",
    data() {
      return {
        newQuiz: {
          name: '',
          questions: []
        }
      }
    },

    mounted() {
      this.$store.dispatch("getQuestions");
    },
    computed: {

      results() {
        if (this.$store.state.searchResults.length === 0) {
          return this.$store.state.questions;
        }
        else {
          return this.$store.state.searchResults;
        }
      }
    },
    methods: {
      prettify(arr) {
        let str = arr.join(" ");
        return str;
      },
      async createQuiz() {
        if (this.newQuiz.questions.length < 1) {
          this.$swal({
            title: "Please Select One Or More Questions",
            showConfirmButton: true,
            confirmButtonColor: "#fb8c00"
          })
        }
        else {
          await this.$store.dispatch("createQuiz", this.newQuiz)
          this.newQuiz.name = ''
          this.newQuiz.questions = []
        }
      }
    },
    components: {
      SearchQuestion,
      NavButtons,
      Question
    }
  };
</script>