<template>
  <div class="FillInTheBlank row">
    <div class="col d-flex flex-column">
      <label for="prompt">Please write the complete sentence</label>
      <input type="text" id="prompt" class="form-control" placeholder="Complete sentence here"
        v-model="newQuestion.prompt">
      <label for="correctWord">Please identify the word you would like to replace with a blank</label>
      <input type="text" id="correctWord" class="form-control" v-model="correctWord">
      <button class="btn btn-info" @click="format">build stuff</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FillInTheBlank",
    props: [],
    data() {
      return {
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
    computed: {},
    methods: {
      format() {
        let promptArray = this.newQuestion.prompt.split(' ')
        let index = promptArray.indexOf(this.correctWord)
        promptArray.splice(index, 1, '__________')
        this.newQuestion.prompt = promptArray.join(' ')
        this.newQuestion.correct.push({ value: this.correctWord })

      }
    },
    components: {}
  }
</script>