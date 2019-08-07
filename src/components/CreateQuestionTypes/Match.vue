<template>
  <div class="Match row justify-content-center">
    <div class="md-layout-item md-medium-size-100 md-size-66">
      <form @submit.prevent="setCorrect">
        <div class="md-card md-theme-default">
          <div class="md-card-header" data-background-color="blue">
            <h4 class="title">Matching Terms and Definitions</h4>
          </div>
          <div class="md-card-content">
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-66">
                <!-- <div class="md-field md-theme-default md-disabled has-danger"> -->
                <md-field class="has-danger md-theme-defult">
                  <label>Question Prompt: </label>
                  <md-input v-model="newQuestion.prompt"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33" v-if="numberOfMatches == 0">
                <md-field class="has-danger">
                  <label>Number of Matches</label>
                  <md-input v-model="numberOfMatches" type="number"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-100" v-if="numberOfMatches > 0">
                <button v-if="numberOfMatches > 0" type="button" class="md-button md-raised md-info md-theme-default"
                  @click="addMatch">
                  <div class="md-ripple">
                    <div class="md-button-content">Add<i class="fas fa-plus ml-2"></i></div>
                  </div>
                </button>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <span v-for="(option, index) in terms" class="d-flex flex-row">
                  <i class="fas fa-ban fa-lg inline-form mr-2 align-self-center" @click="removeMatch(option)"></i>
                  <md-field class="has-danger">
                    <label> Term
                      {{index + 1}}: </label>
                    <md-input v-model="option.term" type="text"></md-input>
                  </md-field>
                </span>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-66">
                <md-field class="has-danger" v-for="(option, index) in definitions">
                  <label>Definition {{index + 1}}: </label>
                  <md-input v-model="option.term" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100 text-center"><button type="submit"
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
    name: "Match",
    props: [],
    data() {
      return {
        numberOfMatches: 0,
        newQuestion: {
          prompt: '',
          options: [],
          correct: [],
        }
      }
    },
    watch: {
      numberOfMatches: function () {
        this.newQuestion.options = []
        this.newQuestion.correct = []
        for (let i = 0; i < this.numberOfMatches; i++) {
          this.newQuestion.options.push({ term: '', isDefinition: false }, { term: '', isDefinition: true })
        }
        return this.newQuestion.options
      }
    },
    computed: {
      definitions() {
        return this.newQuestion.options.filter(opt => opt.isDefinition == true)
      },
      terms() {
        return this.newQuestion.options.filter(opt => opt.isDefinition == false)
      }
    },
    methods: {
      setCorrect() {
        for (let i = 0; i < this.newQuestion.options.length; i += 2) {
          let temp = { value: this.newQuestion.options[i].term, definition: this.newQuestion.options[i + 1].term }
          this.newQuestion.correct.push(temp)
        }
        this.createQuestion()
      },
      addMatch() {
        this.newQuestion.options.push({ term: '', isDefinition: false }, { term: '', isDefinition: true })
      },
      removeMatch(option) {
        let index = this.newQuestion.options.indexOf(option)
        this.newQuestion.options.splice(index, 2)
        if (this.newQuestion.options.length == 0) {
          this.numberOfMatches = 0
        }
      },
      createQuestion() {
        let question = JSON.parse(JSON.stringify(this.newQuestion))
        this.$emit("createQuestion", question)
        this.reset()
      },
      reset() {
        this.numberOfMatches = 0
        this.newQuestion.prompt = ''
      }
    },
    components: {}
  }
</script>
<style>
  textarea {
    border: 1px solid black;
    border-radius: .25rem;
  }

  i {
    color: red;
  }

  .f-control {
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }
</style>