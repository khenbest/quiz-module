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

      <span v-if="numOfBlanks > 0">
        <label for="numOfOptions">How many words would you like in your word bank, in addition to
          the correct terms
          already identified?</label>
        <input v-if="numOfOptions == 0" min="0" type="number" id="numOfOptions" class="form-control mx-auto"
          v-model="numOfOptions">
        <label for="wordBank">Word Bank</label>
      </span>
      <span v-for="option in options">
        <i class="fas fa-ban fa-lg inline-form mr-2" @click="removeOption(option)"></i>
        <input type="text" id="wordBank" class="inline-form my-1 col-6 mx-auto f-control" v-model="option.value">
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
        this.newQuestion.options = []
        for (let i = 0; i < this.newQuestion.correct.length; i++) {
          let correct = this.newQuestion.correct[i]
          this.newQuestion.options.push(correct)
        }
        let adjustedNumOfOptions = this.numOfOptions - this.newQuestion.correct.length
        this.createObjects(adjustedNumOfOptions, 'options')
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
      createObjects(num, prop) {
        for (let i = 0; i < num; i++) {
          this.newQuestion[prop].push({ value: '' })
        }
      },
      remove(option) {
        let index = this.newQuestion.options.indexOf(option)
        this.newQuestion.options.splice(index, 1)
      },
      format() {
        // debugger
        let promptArray = this.newQuestion.prompt.split(' ')
        for (let i = 0; i < this.newQuestion.correct.length; i++) {
          let word = this.newQuestion.correct[i]
          let index = promptArray.indexOf(word['value'])
          if (index < 0) {
            this.newQuestion.correct = []
            this.numOfBlanks = 0;
            this.invalidAlert()
            return;
          }
          promptArray.splice(index, 1, '___________')
        }
        this.newQuestion.prompt = promptArray.join(' ')
      },
      createQuestion() {
        this.$emit("createQuestion", this.newQuestion)
      },
      invalidAlert() {
        // Use sweetalert2
        this.$swal({
          title: 'Invalid Entry',
          text: 'That word does not seem to be in the sentence',
          showCloseButton: true
        });
      },
      cancel() {
        this.newQuestion.prompt = ''
        this.numOfBlanks = 0
        this.numOfOptions = 0
        this.newQuestion.correct = []
        this.newQuestion.options = []
      }
    },
    components: {}
  }
</script>