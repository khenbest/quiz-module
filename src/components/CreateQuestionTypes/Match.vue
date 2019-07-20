<template>
  <div class="Match row">
    <div class="col-10 offset-lg-1 d-flex flex-column">
      <label for="prompt" class="my-2">Question Prompt</label>
      <!-- <input type="text" v-model="newQuestion.prompt" class="form-control" id="prompt"> -->
      <textarea placeholder="Question prompt..." v-model="newQuestion.prompt" id="prompt" class-="form-control mx-auto"
        spellcheck="true"></textarea>
      <label for="howManyMatching" class="my-2">How many matching pairs would you like?</label>
      <button v-if="numberOfMatches > 0" class="btn btn-info" @click="addMatch">Add a Pair</button>
      <input v-if="numberOfMatches == 0" class="form-control col-1 mx-auto" type="number" id="howManyMatching"
        v-model="numberOfMatches">
    </div>
    <div class="col">
      <div v-if="newQuestion.options.length > 0" class="row d-flex justify-content-center">
        <div class="col-5 d-flex flex-column justify-content-center">

          <h3>Terms</h3>
          <span v-for="(option, index) in terms">
            <input class="form-control my-1 col-6 mx-auto" v-model="option.term" type="text">
            <button class="btn btn-danger" @click="removeMatch(option)">Delete</button>
          </span>
        </div>
        <div class="col-5 d-flex flex-column justify-content-center">
          <h3>definitions</h3>
          <span v-for="option in definitions">
            <input class="form-control my-1" v-model="option.term" type="text">
          </span>
        </div>
      </div>
      <button @click="setCorrect">make the correct array!</button>
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
        //  this.newQuestion.correct = new Array(this.numberOfMatches)
        for (let i = 1; i < this.newQuestion.options.length; i += 2) {
          let temp = [this.newQuestion.options[i - 1], this.newQuestion.options[i]]
          this.newQuestion.correct.push(temp)

        }

      },
      addMatch() {
        this.newQuestion.options.push({ term: '', isDefinition: false }, { term: '', isDefinition: true })
      },
      removeMatch(option) {
        let index = this.newQuestion.options.indexOf(option)
        console.log(index)
        this.newQuestion.options.splice(index, 2)

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
</style>