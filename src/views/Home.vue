<template>
  <div class="home">
    <button @click="go('createQuestion')" type="button" class="md-button md-info md-theme-default">
      <div class="md-ripple">
        <div class="md-button-content">Create A Question</div>
      </div>
    </button>
    <button @click="go('Questions')" type="button" class="md-button md-primary md-theme-default">
      <div class="md-ripple">
        <div class="md-button-content">Test Question(s)</div>
      </div>
    </button>
    <button @click="go('createTest')" type="button" class="md-button md-info md-theme-default">
      <div class="md-ripple">
        <div class="md-button-content">Create A Quiz</div>
      </div>
    </button>
    <div class="row justify-content-center">
      <div class="md-layout-item md-medium-size-75 md-xsmall-size-75 md-size-75">
        <div class="md-card md-theme-default">
          <div class="md-card-header" data-background-color="orange">
            <h4 class="title">Quiz Creator</h4>
            <p class="category">Add questions from below</p>
          </div>
          <div class="md-card-content">
            <div>
              <div class="md-content md-table md-theme-default" table-header-color="gray" value>
                <div class="md-content md-table-content md-scrollbar md-theme-default">
                  <table>
                    <thead>
                      <tr>
                        <th class="md-table-head">
                          <div class="md-table-head-container md-ripple md-disabled">
                            <div class="md-table-head-label">Prompt</div>
                          </div>
                        </th>
                        <th class="md-table-head">
                          <div class="md-table-head-container md-ripple md-disabled">
                            <div class="md-table-head-label">Type</div>
                          </div>
                        </th>
                        <th class="md-table-head">
                          <div class="md-table-head-container md-ripple md-disabled">
                            <div class="md-table-head-label">Categories</div>
                          </div>
                        </th>
                        <th class="md-table-head">
                          <div class="md-table-head-container md-ripple md-disabled">
                            <div class="md-table-head-label">Selected</div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody v-for="question in questions" :key="question._id">
                      <tr class="md-table-row">
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">{{question.prompt}}</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">{{question.type}}</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">{{prettify(question.categories)}}</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container justify-content-end">
                            <md-checkbox v-model="selectedQuestions" :value="question">
                            </md-checkbox>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Question from "@/components/Question.vue";
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
      }
    }
  };
</script>