<template>
  <div class="Match row">
    <div class="col-10 offset-lg-1 d-flex flex-column">
      <label for="prompt" class="my-2">Question Prompt</label>
      <!-- <input type="text" v-model="newQuestion.prompt" class="form-control" id="prompt"> -->
      <textarea placeholder="Question prompt..." v-model="newQuestion.prompt" id="prompt" class-="form-control mx-auto"
        spellcheck="true"></textarea>
      <label for="howManyMatching" class="my-2">How many matching pairs would you like?</label>
      <input class="form-control col-1 mx-auto" type="number" id="howManyMatching" v-model="numberOfMatches">
    </div>
    <div class="col">
      <div v-if="newQuestion.options.length > 0" class="row d-flex justify-content-center">
        <div class="col-5 d-flex flex-column justify-content-center">
          <h3>Terms</h3>
          <span v-for="option in terms">
            <input class="form-control my-1 col-6 mx-auto" v-model="option.term" type="text">
          </span>
        </div>
        <div class="col-5 d-flex flex-column justify-content-center">
          <h3>definitions</h3>
          <span v-for="option in definitions">
            <input class="form-control my-1" v-model="option.term" type="text">
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
<style>
  textarea {
    border: 1px solid black;
    border-radius: .25rem;
  }
</style>