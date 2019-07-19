<template>
  <div class="Match">
    <label for="prompt">Question Prompt</label>
    <input type="text" v-model="newQuestion.prompt" class="form-control" id="prompt">
    <label for="howManyMatching">How many matching pairs would you like?</label>
    <input type="number" id="howManyMatching" v-model="numberOfMatches">

    <span v-for="(option, index) in newQuestion.options">
      <label>test</label>
      <input v-model="option.term" type="text">
    </span>

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
          type: this.selected,
          rationale: ''
        }

      }
    },
    watch: {
      numberOfMatches: function () {
        this.newQuestion.options = []
        for (let i = 0; i < this.numberOfMatches; i++) {
          this.newQuestion.options.push({ term: '' }, { term: '', isDefinition: true })
        }
        return this.newQuestion.options
      }
    },
    computed: {

    },
    methods: {

    },
    components: {}
  }
</script>