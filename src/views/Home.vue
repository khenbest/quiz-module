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
    <div class="row justify-content-center mt-3">
      <div class="col-8">

        <searchQuestion></searchQuestion>
      </div>
    </div>
    <div class="row justify-content-center mb-0">
      <!--table needs v-model both places DON'T delete one-->
      <md-table class="col-8" v-model="selectedQuestions" md-sort="question" md-sort-order="asc" md-card
        md-fixed-header>
        <md-table-toolbar class="md-header my-3" data-background-color="blue">
          <h1 class="md-title" style="color:white !important; text-shadow: gray 0 1px; font-weight: 500;">Questions</h1>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" v-for="question in questions">
          <md-table-cell md-label="Prompt" md-sort-by="question.prompt">{{ question.prompt }}
          </md-table-cell>
          <md-table-cell md-label="Type" md-sort-by="question.type">{{ question.type }}</md-table-cell>
          <md-table-cell md-label="Categories" md-sort-by="question.categories">{{ prettify(question.categories) }}
          </md-table-cell>
          <md-table-cell md-label="Selected">
            <md-checkbox v-model="selectedQuestions" :value="question">
              <!--table needs v-model both places DON'T delete one-->
            </md-checkbox>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <div class="row mt-0 mb-2 justify-content-center">
      <div class="col-4">
        <md-button @click="createQuiz" class="md-ripple md-info ">
          Submit
        </md-button>
      </div>
    </div>
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
      questions() {
        return this.$store.state.questions;
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