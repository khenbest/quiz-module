<template>
  <div class="openEnded ">
    <div class="md-layout-item md-medium-size-100 md-size-66">
      <form @submit.prevent="createQuestion">
        <div class="md-card md-theme-default">
          <div class="md-card-header" data-background-color="blue">
            <h4 class="title">Open Ended</h4>
          </div>
          <div class="md-card-content">
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-field class="has-danger md-theme-defult">
                  <label>Question Prompt: </label>
                  <md-input v-model="newQuestion.prompt"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-field class="has-danger md-theme-defult">
                  <label>Rationale: </label>
                  <md-textarea v-model="newQuestion.rationale"></md-textarea>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100 text-right"><button type="submit"
                  class="md-button md-raised md-info md-theme-default">
                  <div class="md-ripple">
                    <div class="md-button-content">Submit</div>
                  </div>
                </button>
                <button type="button" class="md-button md-raised md-info md-theme-default" @click="reset">
                  <div class="md-ripple">
                    <div class="md-button-content">Cancel</div>
                  </div>
                </button></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "openEnded",
    props: [],
    data() {
      return {
        newQuestion: {
          prompt: '',
          options: [],
          correct: [{ value: '' }],
          rationale: '',
        }
      }
    },
    computed: {},
    methods: {
      createQuestion() {
        this.newQuestion.correct[0].value = this.newQuestion.rationale
        let question = JSON.parse(JSON.stringify(this.newQuestion))
        this.$emit("createQuestion", question)
        this.reset()
      },
      reset() {
        this.newQuestion = {
          type: this.type,
          prompt: '',
          rationale: ''
        }
      }
    },
    components: {}
  }
</script>