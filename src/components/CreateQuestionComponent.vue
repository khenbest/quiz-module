<template>
  <div class="CreateQuestion row d-flex justify-content-center">
    <!-- <div class="col-sm-12"> -->
    <div class="md-layout-item md-medium-size-100 md-size-66">
      <div class="md-card md-theme-default">
        <div class="md-card-header" data-background-color="orange">
          <h4 class="title"><strong>Select Category Type</strong>
            <i class="ml-1 text-white fas " :class="[selectTypeOpen ? 'fa-minus' : 'fa-plus']"
              @click="selectTypeOpen = !selectTypeOpen"></i></h4>
        </div>
        <div v-if="selectTypeOpen" class="md-card-content">
          <div class="md-content md-table md-theme-default" table-header-color="orange">
            <div class="md-content md-table-content md-scrollbar md-theme-default">
              <div class="md-layout-item md-size">
                <CategoriesComponent v-on:change-categories='updateCategories($event)'></CategoriesComponent>
                <md-field>
                  <label for="questionType">Question Type</label>
                  <md-select v-model="selected" id="questionType">
                    <md-option v-for="type in types" :value="type.value">{{type.text}}</md-option>
                  </md-select>
                </md-field>
              </div>
            </div>
            <!---->
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->


    <div class="col-12 d-flex flex-column">
      <component v-if="categories.length > 0" :is="selected" v-on:createQuestion="createQuestion($event)"
        :selected="selected"></component>
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
        selectTypeOpen: true,
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
    watch: {
      selected: function () {
        if (this.categories.length == 0) {
          this.categoryAlert()
        }
      }
    },
    methods: {
      createQuestion(question) {
        question.categories = this.categories
        this.$store.dispatch('createQuestion', question)
      },

      updateCategories(payload) {
        this.categories = payload
      },
      categoryAlert() {
        this.$swal({
          title: 'Required Category',
          text: 'Please Select A Category',
          showCloseButton: true,
          confirmButtonColor: "#fb8c00"

        });
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