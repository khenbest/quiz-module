<template>
  <div class="d-flex row justify-content-center">
    <div class="col-12 mt-3">
      <h3>{{question.prompt}}</h3>
      <form @submit.prevent="submit" class="form-row justify-content-center">
        <div class="form-check justify-space-between m-2">
          <input class="form-check-input" v-model="checked" type="radio" name="option" id="a" value="true" checked />
          <label class="form-check-label" for="a">True</label>
        </div>
        <div class="form-check justify-space-between m-2">
          <input class="form-check-input" v-model="checked" type="radio" name="option" id="b" value="false" checked />
          <label class="form-check-label" for="b">False</label>
        </div>
        <div class="col-12">
          <button type="submit" class="md-button md-sm md-info">
            <div class="md-ripple">
              <div class="md-button-content">Submit</div>
            </div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TrueFalse",
    props: {
      question: { type: Object, required: true }
    },
    data() {
      return {
        checked: ""
      };
    },
    methods: {
      submit() {
        let bool = this.checked == 'true' ? true : false
        this.$emit("submit", {
          question: this.question,
          submission: { value: bool }
        });
      }
    }
  };
</script>