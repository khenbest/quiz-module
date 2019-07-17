<template>
  <div class="CreateQuestion">
    <button class="btn btn-info" @click="makeQuestion = !makeQuestion">Create a Question</button>
    <form v-if="makeQuestion" @submit.prevent="createQuestion">
      <div class="form-group">
        <label for="questionType">Select Type of Question</label>
        <select class="form-control" id="questionType" v-model="selected">
          <option v-for="type in types" :value="type.value">{{type.text}}</option>
        </select>
        <component :is="selected"></component>
      </div>
    </form>
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

<!-- let schema = new mongoose.Schema({
prompt: { type: String, required: true },
options: [{ type: Object, required: true }],
// options2: [{ type: Object }],
correct: [{ type: Object, required: true }],
type: { type: String, enum: ["TrueFalse", "Match", "OpenEnded", "FillInTheBlank", "MultipleChoice"], default:
"MultipleChoice", required: true },
rationale: { type: String },
}, { timestamps: true }) -->