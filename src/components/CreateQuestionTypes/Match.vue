<template>
  <div class="Match row">
    <div class="col-10 offset-lg-1 d-flex flex-column">
      <label for="prompt" class="my-2">Question Prompt</label>
      <textarea required placeholder="Question prompt..." v-model="newQuestion.prompt" id="prompt"
        class-="form-control mx-auto" spellcheck="true"></textarea>
      <label for="howManyMatching" class="my-2">How many matching pairs would you like?</label>
      <button v-if="numberOfMatches > 0" class="btn btn-info col-2 mx-auto" @click="addMatch">Add a Pair</button>
      <input v-if="numberOfMatches == 0" class="form-control col-1 mx-auto" type="number" min="0" id="howManyMatching"
        v-model="numberOfMatches">
    </div>
    <div class="col">
      <div v-if="newQuestion.options.length > 0" class="row d-flex justify-content-center">
        <div class="col-5 d-flex flex-column justify-content-center">
          <h3>Terms</h3>
          <span v-for="(option, index) in terms">
            <i class="fas fa-ban fa-lg inline-form mr-2" @click="removeMatch(option)"></i>
            <input class="inline-form my-1 col-6 mx-auto f-control" v-model="option.term" type="text">
          </span>
        </div>
        <div class="col-5 d-flex flex-column justify-content-center">
          <h3>definitions</h3>
          <span v-for="option in definitions">
            <input class="form-control my-1" v-model="option.term" type="text">
          </span>
        </div>
      </div>
      <button class="btn btn-info" @click="setCorrect">submit</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Match",
    props: ["selected"],
    data() {
      return {
        numberOfMatches: 0,
        newQuestion: {
          prompt: '',
          options: [],
          correct: [],
          type: this.selected,
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
        for (let i = 1; i < this.newQuestion.options.length; i += 2) {
          let temp = [this.newQuestion.options[i - 1], this.newQuestion.options[i]]
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
        this.$emit("createQuestion", this.newQuestion)
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