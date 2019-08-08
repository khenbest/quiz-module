<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <!--table needs v-model both places DON'T delete one-->
      <md-table class="col-8" v-model="newQuiz.questions" md-card>
        <md-table-toolbar class="md-header my-3" data-background-color="blue">
          <h1 class="md-title" style="color:white !important; text-shadow: gray 0 1px; font-weight: 500;">Available
            Questions</h1>
        </md-table-toolbar>
        <md-content class="md-scrollbar">
          <md-table-row v-for="question in results">
            <md-table-cell md-label="Prompt">{{ question.prompt }}</md-table-cell>
            <md-table-cell md-label="Type">{{ question.type }}</md-table-cell>
            <md-table-cell md-label="Categories">{{ prettify(question.categories) }}</md-table-cell>
            <md-table-cell md-label="Selected">
              <md-checkbox v-model="newQuiz.questions" :value="question">
                <!--table needs v-model both places DON'T delete one-->
              </md-checkbox>
            </md-table-cell>
            <md-table-cell>
              <i class="fas fa-ban fa-lg inline-form mr-2 align-self-center" @click="deleteQuestion(question._id)"></i>
            </md-table-cell>
          </md-table-row>
        </md-content>
      </md-table>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 md-card">
        <div class="md-toolbar md-table-toolbar md-transparent md-header my-3 md-theme-default md-elevation-0"
          data-background-color="purple">
          <h1 class="md-title" style="color: white !important; text-shadow: gray 0px 1px; font-weight: 500;">Confirm
            Quiz Details</h1>
        </div>
        <md-field md-clearable md-inline>
          <label>Enter Quiz Name Here</label>
          <md-input required v-model="newQuiz.name"></md-input>
        </md-field>
        <h3>
          <u>Quiz Questions</u>
        </h3>
        <div class="row justify-content-center">
          <div class="col-4" style="display: inline-block;" v-for="(question, index) in newQuiz.questions">
            <h6 class="text-truncate">{{index + 1}}. {{question.prompt}}</h6>
          </div>
        </div>
        <md-button @click="createQuiz" class="md-ripple md-primary col-4 my-2">Submit</md-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CreateQuiz",
    props: [],
    mounted() {
      this.$store.dispatch("getQuestions");
    },
    data() {
      return {
        newQuiz: {
          name: "",
          questions: []
        }
      };
    },
    computed: {
      results() {
        if (this.$store.state.searchResults.length === 0) {
          return this.$store.state.questions;
        } else {
          return this.$store.state.searchResults;
        }
      }
    },
    methods: {
      prettify(arr) {
        let str = arr.join(" ");
        return str;
      },
      deleteQuestion(id) {
        this.$store.dispatch('deleteQuestion', id)
      },
      async createQuiz() {
        if (this.newQuiz.questions.length < 1) {
          this.$swal({
            title: "Please Select One Or More Questions",
            showConfirmButton: true,
            confirmButtonColor: "#fb8c00"
          });
        } else {
          if (this.newQuiz.name != "") {
            await this.$store.dispatch("createQuiz", this.newQuiz);
            this.newQuiz.name = "";
            this.newQuiz.questions = [];
            this.$swal({
              title: "Quiz Created!",
              showConfirmButton: true,
              confirmButtonColor: "#9c27b0"
            });
          }
        }
      }
    },
    components: {}
  };
</script>