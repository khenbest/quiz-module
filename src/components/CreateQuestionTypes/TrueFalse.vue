<template>
  <div class="TrueFalse">
    <div class="d-flex row justify-content-center">
      <div class="col-12 mt-3 flex-column d-flex">
        <label for="prompt" class="my-2">Question Prompt</label>
        <textarea required placeholder="Question prompt..." v-model="newQuestion.prompt" id="prompt"
          class-="form-control mx-auto" spellcheck="true"></textarea>
        <h5 class="mt-2">Is the question true or false?</h5>
        <div class="form-row justify-content-center">
          <div class="form-check justify-space-between m-2">
            <input class="form-check-input" v-model="checked" type="radio" name="option" id="a" value="a" checked>
            <label class="form-check-label" for="a">
              True
            </label>
          </div>
          <div class="form-check justify-space-between m-2">
            <input class="form-check-input" v-model="checked" type="radio" name="option" id="b" value="b" checked>
            <label class="form-check-label" for="b">
              False
            </label>

          </div>
          <div class="col-12 d-flex flex-column">
            <!-- <input class="form-control col-6 mx-auto" type="text" v-model="newQuestion.rationale"
              placeholder="Explanation..." id="rationale"> -->
            <label for="rationale">Explanation</label>
            <textarea required placeholder="Explanation..." v-model="newQuestion.rationale" id="rationale"
              class-="form-control mx-auto" spellcheck="true"></textarea>
          </div>
          <div class="col-12">
            <button class="btn btn-success mt-3" @click="createQuestion">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TrueFalse",
    props: ['selected', 'categories'],
    data() {
      return {
        checked: '',
        newQuestion: {
          prompt: '',
          options: [{ a: true }, { b: false }],
          correct: [],
          type: this.selected,
          categories: this.categories,
          rationale: ''
        }
      }
    },
    computed: {
      correct() {
        this.newQuestion.correct = []
        if (this.checked == 'a') {
          this.newQuestion.correct.push({ a: true })
        } else if (this.checked == 'b') {
          this.newQuestion.correct.push({ b: false })
        }
      }
    },
    methods: {
      createQuestion() {
        this.$emit("createQuestion", this.newQuestion)
      }
    },
    components: {}
  }
</script>