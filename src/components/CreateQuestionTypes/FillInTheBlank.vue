<template>
  <div class="FillInTheBlank row justify-content-center">
    <div class="md-layout-item md-medium-size-100 md-size-66">
      <form @submit.prevent="format">
        <div class="md-card md-theme-default">
          <div class="md-card-header" data-background-color="blue">
            <h4 class="title">Fill In The Blank</h4>
          </div>
          <div class="md-card-content">
            <div class="md-layout ">
              <div class="md-layout-item md-small-size-100 md-size-100">
                <!-- <div class="md-field md-theme-default md-disabled has-danger"> -->
                <md-field class="has-danger md-theme-defult">
                  <label>Complete Sentence</label>
                  <md-input v-model="newQuestion.prompt"></md-input>
                </md-field>

              </div>
              <div class="border border-dark col-6">
                <div class="md-layout-item md-small-size-100 md-size-100" id="numberOfWords">
                  <md-field v-if="numOfBlanks == 0" class="has-danger">
                    <label>Number of words to be removed</label>
                    <md-input v-model="numOfBlanks" type="number"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100" id="linebreak">
                  <span v-for="(word, index) in correct" class="d-flex flex-row">
                    <i class="fas fa-ban fa-lg inline-form mr-2 align-self-center" @click="removeWord(word)"></i>
                    <md-field class="has-danger">
                      <label>Word {{index}}: </label>
                      <md-input type="text" v-model="word.value"></md-input>
                    </md-field>
                  </span>
                </div>
              </div>
              <div class="border border-dark col-6">

                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field v-if="numOfOptions == 0" class="has-danger">
                    <label>Number of Options </label>
                    <md-input v-model="numOfOptions" type="number"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <span v-for="(option, index) in options" class="d-flex flex-row">
                    <i v-if="index > correct.length - 1"
                      class="fas fa-ban fa-lg inline-form d-flex align-self-center mr-2"
                      @click="removeOption(option)"></i>
                    <md-field class="has-danger">
                      <label>Option {{index}} in word bank: </label>
                      <md-input v-model="option.value" type="text"></md-input>
                    </md-field>
                  </span>
                </div>
              </div>

              <div class="md-layout-item md-size-100 text-center">
                <button type="submit" class="md-button md-raised md-info md-theme-default">
                  <div class="md-ripple">
                    <div class="md-button-content">Submit</div>
                  </div>
                </button>
                <button type="button" class="md-button md-raised md-info md-theme-default" @click="reset">
                  <div class="md-ripple">
                    <div class="md-button-content">Reset</div>
                  </div>
                </button>
              </div>
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
    props: [],
    data() {
      return {
        numOfBlanks: 0,
        numOfOptions: 0,
        correctWord: '',
        newQuestion: {
          prompt: '',
          options: [],
          correct: [],
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
      removeWord(word) {
        let index = this.newQuestion.correct.indexOf(word)
        this.newQuestion.correct.splice(index, 1)
        this.removeOption(word)
      },
      //removes words from the sentence and replaces it with underscores. it is called from the @click event, not from another method.
      format() {
        let toBeCorrect = this.newQuestion.prompt
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
        this.newQuestion.correct = [{ value: toBeCorrect }]

        console.log(prompt)
        this.createQuestion()
      },

      createQuestion() {
        let question = JSON.parse(JSON.stringify(this.newQuestion))
        this.$emit("createQuestion", question)
        this.reset()
      },
      //alerts which word is not in the sentence
      invalidAlert(value) {
        this.$swal({
          title: 'Invalid Entry: ' + value,
          text: 'That word does not seem to be in the sentence',
          showCloseButton: true,
          confirmButtonColor: "#fb8c00"

        });
      },
      //resets everything
      reset() {
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

<style>
  /* #linebreak {
    display: flex;
    justify-content: center;
  } */
</style>