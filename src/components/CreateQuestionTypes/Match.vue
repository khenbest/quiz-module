<template>
  <div class="Match row">
    <div class="col-12">
      <label for="prompt">Question Prompt</label>
      <input type="text" v-model="newQuestion.prompt" class="form-control" id="prompt">
      <label for="howManyMatching">How many matching pairs would you like?</label>
      <input type="number" id="howManyMatching" v-model="numberOfMatches">
    </div>
    <div class="col">
      <div class="row">
        <div class="col-5 d-flex flex-column">
          <h3>Terms</h3>
          <span v-for="option in terms">
            <input class="form-control" v-model="option.term" type="text">
          </span>
        </div>
        <div class="col-5 d-flex flex-column">
          <h3>definitions</h3>
          <span v-for="option in definitions">
            <input class="form-control" v-model="option.term" type="text">
          </span>
        </div>
      </div>
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
          type: this.selected,
          rationale: ''
        }

      }
    },
    watch: {
      numberOfMatches: function () {
        // debugger
        this.newQuestion.options = []
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

    },
    components: {}
  }
</script>