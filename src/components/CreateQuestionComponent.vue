<template>
  <div class="CreateQuestion row">
    <div class="col-12 d-flex flex-column">
      <button class="btn btn-info mx-auto" @click="makeQuestion = !makeQuestion">Create a Question</button>
      <div v-if="makeQuestion">
        <div class="form-group d-flex justify-content-center flex-column justify-content-center">
          <strong> <label for="questionType" class="mt-2">Select Type of Question</label></strong>
          <select class="form-control mx-auto" id="questionType" v-model="selected">
            <option v-for="type in types" :value="type.value">{{type.text}}</option>
          </select>
        </div>

        <CategoriesComponent v-on:change-categories='updateCategories($event)'></CategoriesComponent>

        <div class="col-12 d-flex flex-column">
          <component :is="selected" v-on:createQuestion="createQuestion($event)" :selected="selected"
            :categories="categories"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Match from "./CreateQuestionTypes/Match.vue"
  import TrueFalse from './CreateQuestionTypes/TrueFalse.vue'
  import FillInTheBlank from './CreateQuestionTypes/FillInTheBlank.vue'
  import CategoriesComponent from '@/components/CategoriesComponent.vue'
  export default {
    name: "CreateQuestion",
    props: [],
    data() {
      return {
        selected: '',
        categories: [],
        makeQuestion: false,
        types: [
          { text: 'Matching', value: 'Match' },
          { text: 'True False', value: 'TrueFalse' },
          { text: 'Multiple Choice', value: 'MultipleChoice' },
          { text: 'Open Ended', value: 'OpenEnded' },
          { text: 'Fill in the Blank', value: 'FillInTheBlank' }
        ],
        categoriesArray: ["HTML", "CSS", "Style and Design", "Built In Methods", "SOLID", "OOP", "C#", "Scrum", "Javascript", "Design Patterns"]
      }
    },
    computed: {},
    methods: {
      createQuestion(question) {
        this.$store.dispatch('createQuestion', question)
      },

      updateCategories(payload) {
        this.categories = payload;
      }
    },
    components: {
      Match,
      TrueFalse,
      FillInTheBlank,
      CategoriesComponent
    }
  }
</script>
<style>
  #questionType {
    width: 25%;
  }

  .fa-check {
    color: green;
  }
</style>