<template>
  <div class="CreateQuestion row">
    <div class="col-12 d-flex flex-column">
      <button class="btn btn-info mx-auto" @click="makeQuestion = !makeQuestion">Create a Question</button>
      <form v-if="makeQuestion" @submit.prevent="createQuestion">
        <div class="form-group d-flex justify-content-center flex-column justify-content-center">
          <strong> <label for="questionType" class="mt-2">Select Type of Question</label></strong>
          <select class="form-control mx-auto" id="questionType" v-model="selected">
            <option v-for="type in types" :value="type.value">{{type.text}}</option>
          </select>
          <component :is="selected"></component>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Match from "./CreateQuestionTypes/Match.vue"
  export default {
    name: "CreateQuestion",
    props: [],
    data() {
      return {
        selected: '',
        makeQuestion: false,
        types: [
          { text: 'Matching', value: 'Match' },
          { text: 'True False', value: 'TrueFalse' },
          { text: 'Multiple Choice', value: 'MultipleChoice' },
          { text: 'Open Ended', value: 'OpenEnded' },
          { text: 'Fill in the Blank', value: 'FillInTheBlank' }
        ],

      }
    },
    computed: {},
    methods: {

      createQuestion() {
      }
    },
    components: {
      Match
    }
  }
</script>
<style>
  #questionType {
    width: 25%;
  }
</style>

<!-- let schema = new mongoose.Schema({
prompt: { type: String, required: true },
options: [{ type: Object, required: true }],
// options2: [{ type: Object }],
correct: [{ type: Object, required: true }],
type: { type: String, enum: ["TrueFalse", "Match", "OpenEnded", "FillInTheBlank", "MultipleChoice"], default:
"MultipleChoice", required: true },
rationale: { type: String },
}, { timestamps: true }) -->