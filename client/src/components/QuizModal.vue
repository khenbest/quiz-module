<template>
  <div v-if="activeQuiz._id" id="selected"
    class="md-layout-item md-size-100 md-xsmall-size-100 md-alignment-center-center modal">
    <div class="md-layout-item md-size-66 md-xsmall-size-100 md-alignment-center-center md-card">
      <div class="md-toolbar md-table-toolbar md-transparent md-header my-3 md-theme-default md-elevation-0"
        data-background-color="blue">
        <h1 class="md-title" style="color: white !important; text-shadow: gray 0px 1px; font-weight: 500;">Confirm
          Quiz Details</h1>
      </div>
      <div class="md-layout-item md-size-100 md-alignment-center-center">
        <h2>{{activeQuiz.name}}</h2>
      </div>
      <div class="md-layout-item md-size-100 md-alignment-center-center">
        <h3>Topic: {{activeQuiz.topic}}</h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-100 md-alignment-center-center">
          <h4>
            <u>Quiz Questions</u>
          </h4>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-33 md-xsmall-size-100 md-alignment-center-center my-2"
              v-for="(question, index) in activeQuiz.questions" :key="question._id">
              <p>{{index + 1}}. {{question.prompt}}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="btn-bar" class="my-2">
        <md-button class="md-info" data-dismiss="modal" @click="go('Quiz')" data-target="#selected">Start Quiz
        </md-button>
        <md-button class="md-warning" data-dismiss="modal" @click="go('CreateQuizView')" data-target="#selected">
          Edit
          Quiz</md-button>
        <md-button class="md-danger" data-dismiss="modal" data-target="#selected">Close</md-button>
      </div>
    </div>
  </div>
</template>

<script>
  import router from "../router.js";

  export default {
    name: "",
    props: ["activeQuiz"],
    data() {
      return {}
    },
    computed: {},
    methods: {
      go(pageName) {
        router.push({ name: pageName, params: { id: this.activeQuiz._id } });
      }
    },
    components: {}
  }
</script>