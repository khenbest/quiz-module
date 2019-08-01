<template>
  <div class="home">
    <button @click="go('createQuestion')" type="button" class="md-button md-primary md-theme-default">
      <div class="md-ripple">
        <div class="md-button-content">Create A Question</div>
      </div>
    </button>
    <button @click="go('Questions')" type="button" class="md-button  md-primary md-theme-default">
      <div class="md-ripple">
        <div class="md-button-content">Test Question(s)</div>
      </div>
    </button>
    <button @click="go('createTest')" type="button" class="md-button md-primary md-theme-default">
      <div class="md-ripple">
        <div class="md-button-content">Create A Quiz</div>
      </div>
    </button>

    <searchQuestion></searchQuestion>



    <!-- create quiz section by tags -->

    <div class="row justify-content-center mb-0">
      <!--table needs v-model both places DON'T delete one-->
      <md-table class="col-8" v-model="selectedQuestions" md-card>
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
              <md-checkbox v-model="selectedQuestions" :value="question">
                <!--table needs v-model both places DON'T delete one-->
              </md-checkbox>
            </md-table-cell>
          </md-table-row>
        </md-content>
      </md-table>
    </div>
    <div class="row mt-0 mb-2 justify-content-center">
      <div class="col-4">
        <md-button @click="createQuiz" class="md-ripple md-info ">
          Submit
        </md-button>
      </div>
    </div>
    <!--  create quiz section by tags -->


  </div>
</template>

<script>
  // @ is an alias to /src
  import CategoriesComponent from '@/components/CategoriesComponent.vue'

  import Question from "@/components/Question.vue";
  import SearchQuestion from '@/components/SearchQuestions.vue'
  import router from "../router.js";
  export default {
    name: "home",
    data() {
      return {
        selectedQuestions: []
      }
    },
    components: {
      Question
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
      go(pageName) {
        router.push({ name: pageName });
      },
      createQuiz() {
        this.$store.dispatch("createQuiz", this.selectedQuestions)
      }
    },
    components: {
      SearchQuestion,
      CategoriesComponent
    }
  };
</script>