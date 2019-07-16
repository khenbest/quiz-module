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
                <textarea v-for="obj in question.options" class="form-control mb-1" :placeholder="displayQuestion(obj)"
                  readonly></textarea>
              </div>
              <div class="col-5">
                <input v-for="obj in question.options2" class="form-control mb-2" type="text"
                  :placeholder="displayQuestion(obj)" readonly>
              </div>
            </div>
            <form v-else class="form-inline">
              <div class="col-12 justify-content-center">
                <input v-for="obj in question.options" class="form-control  mr-3" type="text"
                  :placeholder="displayQuestion(obj)" readonly>
              </div>
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
        currentQuestion: 1
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
      displayQuestion(q) {
        return `${Object.values(q)[0]}`
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