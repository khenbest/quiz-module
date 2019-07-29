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
        <div class="col-sm-12 col-md-6 offset-md-3 d-flex justify-content-between flex-wrap">
          <button class="btn btn-outline-info mx-auto my-2" v-for="category in categoriesArray"
            @click="checkCategoryStatus(category)">{{category}} <i class="fas"
              :class="[categories.includes(category) ? 'fa-check' : 'fa-plus']"></i></button>
        </div>
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
        categoriesArray: ["HTML", "CSS", "Style and Design", "Built In Methods", "SOLID", "OOP Pillars", "C#", "Scrum", "Javascript", "Design Patterns"]
      }
    },
    computed: {},
    methods: {
      createQuestion(question) {
        this.$store.dispatch('createQuestion', question)
      },
      addToCategories(category) {
        console.log(category)
        this.categories.push(category)
      },
      removeFromCategories(category) {
        let index = this.categories.indexOf(category)
        this.categories.splice(index, 1)
      },
      checkCategoryStatus(category) {
        if (this.categories.includes(category)) {
          this.removeFromCategories(category)
        } else {
          this.addToCategories(category)
        }
      }
    },
    components: {
      Match,
      TrueFalse,
      FillInTheBlank
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