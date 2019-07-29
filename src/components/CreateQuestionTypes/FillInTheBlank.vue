<template>
  <div class="FillInTheBlank row">
    <div class="col d-flex flex-column">
      <label for="prompt">Please write the complete sentence</label>
      <input type="text" id="prompt" class="form-control col-6 mx-auto" placeholder="Complete sentence here"
        v-model="newQuestion.prompt">

      <span v-if="numOfBlanks == 0">
        <label for="numOfBlanks">How many words would you like to remove from the sentence?</label>
        <input min="0" type="number" id="numOfBlanks" class="form-control mx-auto col-6" v-model="numOfBlanks">
      </span>
      <hr>
      <span v-if="numOfBlanks > 0">
        <label for="correctWord" class="mt-2"><strong>Please identify the word(s) you would like to replace with a
            blank</strong></label>
        <input v-for="word in correct" type="text" id="correctWord" class="form-control my-2 col-6 mx-auto"
          v-model="word.value">
        <button class="btn btn-info" @click="format">Format Sentence</button>
        <button class="btn btn-danger" @click="cancel">Cancel</button>
      </span>

      <span v-if="numOfBlanks > 0" class="d-flex flex-column">
        <h3>How many words would you like in your word bank?</h3>
        <input v-if="numOfOptions <= 0" min="0" type="number" id="numOfOptions" class="form-control mx-auto"
          v-model="numOfOptions">
        <label for="wordBank">Word Bank</label>
      </span>
      <span v-for="(option, index) in options">
        <span v-if="index > newQuestion.correct.length-1">
          <i class="fas fa-ban fa-lg inline-form mr-2" @click="removeOption(option)"></i>
          <input type="text" id="wordBank" class="inline-form my-1 col-6 mx-auto f-control" v-model="option.value">
        </span>
      </span>
      <button v-if="newQuestion.options.length > 0" class="btn btn-success mt-3" @click="createQuestion">Submit</button>

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

      },

      createQuestion() {
        this.$emit("createQuestion", this.newQuestion)
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
// let promptArray = this.newQuestion.prompt.split(' ')
// for (let i = 0; i < this.newQuestion.correct.length; i++) { // let word=this.newQuestion.correct[i] // let
  index=promptArray.indexOf(word['value']) // if (index < 0) { // this.newQuestion.correct=[] // this.numOfBlanks=0; //
  this.invalidAlert() // return; // } // promptArray.splice(index, 1, '___________' ) // } //
  this.newQuestion.prompt=promptArray.join(' ')