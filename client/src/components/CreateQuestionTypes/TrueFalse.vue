<template>
  <div class="TrueFalse row justify-content-center">
    <div class="md-layout-item md-size-100">
      <form @submit.prevent="createQuestion">
        <div class="md-card md-theme-default">
          <div class="md-card-header" data-background-color="blue">
            <h4 class="title">True of False</h4>
          </div>
          <div class="md-card-content">
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-100">
                <!-- <div class="md-field md-theme-default md-disabled has-danger"> -->
                <md-field class="has-danger md-theme-defult">
                  <label>Question Prompt: </label>
                  <md-input v-model="newQuestion.prompt"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-100">
                <div class=" has-danger md-alignment-center d-flex flex-row justify-content-center">
                  <!-- <h4>Is The Answer True or False?</h4> -->
                  <div>
                    <label class="mr-2" for="true">True</label>
                    <md-radio type="radio" v-model="checked" value="true" id="true"></md-radio>
                  </div>
                  <div>
                    <label class="mr-2" for="False">False</label>
                    <md-radio type="radio" v-model="checked" value="false" id="false">
                    </md-radio>
                  </div>
                </div>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-field class="has-danger">
                  <label for="">Rationale</label>
                  <md-textarea spellcheck=true v-model="newQuestion.rationale">
                  </md-textarea>
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
    name: "TrueFalse",
    props: [],

    data() {
      return {
        checked: '',
        newQuestion: {
          prompt: '',
          options: [{ value: true }, { value: false }],
          correct: [],
          rationale: ''
        }
      }
    },
    watch: {
      checked: function () {
        this.newQuestion.correct = []
        if (this.checked == 'true') {
          this.newQuestion.correct.push({ value: true })
        } else if (this.checked == 'false') {
          this.newQuestion.correct.push({ value: false })
        }
      }
    },
    methods: {
      createQuestion() {
        let question = JSON.parse(JSON.stringify(this.newQuestion))
        this.$emit("createQuestion", question)
        this.reset()
      },
      reset() {
        this.checked = ''
        this.newQuestion.prompt = ''
        this.newQuestion.correct = []
        this.newQuestion.rationale = ''
      }
    },
    components: {}
  }
</script>