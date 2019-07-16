<template>
  <div v-if="question.options" class="container-fluid">
    <div class="d-flex row justify-content-center">
      <div class="col-12 justify-content-center">
        <button class="btn btn-dark col-4 mr-1" @click="getQuestion(0)">Start Quiz</button>
        <button class="btn btn-primary col-4" @click="getQuestion(1)">Next Question</button>
        <div class="d-flex row justify-content-center">
          <div class="col-8">
            <h1>{{question.prompt}}</h1>
          </div>
          <div class="col-12">
            <div v-if="question.type == 'Match'" class="d-flex row justify-content-center">
              <div class="col-5">
                <textarea v-for="prop in question.options" class="form-control mb-1"
                  :placeholder="displayQuestionVal(prop)" readonly></textarea>
              </div>
              <div class="col-5">
                <input v-for="prop in question.options2" class="form-control mb-2" type="text"
                  :placeholder="displayQuestionVal(prop)" readonly>
              </div>
            </div>
            <form @submit.prevent="gradeQuestion(question, checked)" v-else class="form-inline justify-content-center">
              <div v-for="prop in question.options" class="form-check mt-3 mr-5">
                <input class="form-check-input" v-model="checked" type="radio" name="option"
                  :id="displayQuestionKey(prop)" :value="displayQuestionKey(prop)" checked>
                <label class="form-check-label" :for="displayQuestionKey(prop)">
                  {{displayQuestionVal(prop)}}
                </label>
              </div>
              <button class="btn btn-success mt-3" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    created() {
      this.$store.dispatch("getQuestion", 0)
    },
    data() {
      return {
        currentQuestion: 0,
        checked: ''
      }
    },
    computed: {
      question() {
        return this.$store.state.question
      }
    },
    methods: {
      getQuestion(num) {
        this.currentQuestion += num
        this.$store.dispatch("getQuestion", this.currentQuestion)
      },
      displayQuestionVal(q) {
        return `${Object.values(q)[0]}`
      },
      displayQuestionKey(q) {
        return `${Object.keys(q)[0]}`
      },
      gradeQuestion(question, submission) {
        this.$store.dispatch("gradeQuestion", { question, submission })
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>