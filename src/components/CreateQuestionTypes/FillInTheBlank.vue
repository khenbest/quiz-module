<template>
  <div class="FillInTheBlank row">
    <div class="md-layout-item md-medium-size-100 md-size-66">
      <form @submit.prevent="createQuestion">
        <div class="md-card md-theme-default">
          <div class="md-card-header yellowBtn">
            <h4 class="title">Fill In The Blank</h4>
          </div>
          <div class="md-card-content">
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-100">
                <!-- <div class="md-field md-theme-default md-disabled has-danger"> -->
                <md-field class="has-danger md-theme-defult">
                  <label>Complete Sentence</label>
                  <md-input v-model="newQuestion.prompt"></md-input>
                </md-field>

              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field class="has-danger">
                  <label>Number of words to be removed</label>
                  <md-input v-model="numOfBlanks" type="number"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33" v-for="word in correct">
                <md-field class="has-danger">
                  <label>Word to remove: </label>
                  <md-input v-for="word in correct" type="text" v-model="word.value"></md-input>
                </md-field>
              </div>
              <div v-if="numOfBlanks > 0" class="md-layout-item md-small-size-100 md-size-33">
                <md-field class="has-danger">
                  <label>Number of Options </label>
                  <md-input v-model="numOfOptions" type="number"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33" v-for="(option, index) in options">
                <md-field class="has-danger">
                  <label>Option in word bank: </label>
                  <i class="fas fa-ban fa-sm inline-form d-flex align-self-center mr-2"
                    @click="removeOption(option)"></i>
                  <md-input v-model="option.value" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100 text-right"><button type="submit"
                  class="md-button md-raised md-success md-theme-default">
                  <div class="md-ripple">
                    <div class="md-button-content">Submit</div>
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
    name: "FillInTheBlank",
    props: ["selected"],
    data() {
      return {
        numOfBlanks: 0,
        numOfOptions: 0,
        correctWord: '',
        newQuestion: {
          prompt: '',
          options: [],
          correct: [],
          type: this.selected,
          rationale: ''
        }
      }
    },
    watch: {
      numOfBlanks: function () {
        this.newQuestion.correct = []
        this.createObjects(this.numOfBlanks, 'correct')
      },
      numOfOptions: function () {
        //if number of options changes, then it resets the array to prevent new items from being added to an old array.
        this.newQuestion.options = []
        //calls method to add the correct objects to the options array
        this.addCorrectToOptions()
      }
    },
    computed: {
      correct() {
        return this.newQuestion.correct
      },
      options() {
        return this.newQuestion.options
      }
    },
    methods: {
      addCorrectToOptions() {
        //iterates over correct array and pushes objects into options array
        if (!this.numOfOptions > 0) { return }
        this.newQuestion.options = []
        for (let i = 0; i < this.newQuestion.correct.length; i++) {
          let correct = this.newQuestion.correct[i]
          this.newQuestion.options.push(correct)
        }
        //ensures that the total number of words in the options array (i.e., 'word bank') account for the number of objects objects already in the array (the 'correct' options)
        let adjustedNumOfOptions = this.numOfOptions - this.newQuestion.correct.length
        //creates additional empty objects for word bank
        this.createObjects(adjustedNumOfOptions, 'options')
      },
      //creates {value: '} objects for both the correct array and the options array. It is called by the watchers. 
      createObjects(num, prop) {
        for (let i = 0; i < num; i++) {
          this.newQuestion[prop].push({ value: '' })
        }
      },
      //Removes an option; called from delete button in the form
      removeOption(option) {
        let index = this.newQuestion.options.indexOf(option)
        this.newQuestion.options.splice(index, 1)
      },
      //removes words from the sentence and replaces it with underscores. it is called from the @click event, not from another method.
      format() {
        debugger
        let out = ''
        let prompt = this.newQuestion.prompt
        for (let i = 0; i < this.newQuestion.correct.length; i++) {
          let target = this.newQuestion.correct[i]
          let value = target['value']
          let reg = new RegExp(value, "gi")
          if (!reg.test(prompt)) {
            this.newQuestion.correct = []
            this.numOfBlanks = 0;
            this.invalidAlert(value)
            return;
          }
          out = prompt.replace(reg, "___________")
          prompt = out
        }
        this.newQuestion.prompt = prompt
        console.log(prompt)
        this.$emit("createQuestion", this.newQuestion)
      },

      createQuestion() {
        this.format()
        // this.$emit("createQuestion", this.newQuestion)
      },
      //alerts which word is not in the sentence
      invalidAlert(value) {
        this.$swal({
          title: 'Invalid Entry: ' + value,
          text: 'That word does not seem to be in the sentence',
          showCloseButton: true
        });
      },
      //resets everything
      cancel() {
        this.newQuestion.prompt = ''
        this.numOfBlanks = 0
        this.numOfOptions = 0
        this.newQuestion.correct = []
        this.newQuestion.options = []
      },

    },
    components: {}
  }
</script>