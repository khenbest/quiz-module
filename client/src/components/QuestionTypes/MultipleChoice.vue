<template>
  <div class="md-layout-item md-small-size-100 md-size-100">
    <div class="col-12 mt-3">
      <h3>{{question.prompt}}</h3>
      <form @submit.prevent="submit" class="form-row justify-content-center">
        <div v-for="option in question.options" class="form-check justify-space-between m-2">
          <input class="form-check-input" type="radio" name="option" v-model="checked" :value="option.value" />
          <label class="form-check-label">{{option.value}}</label>
        </div>
        <div class="md-layout-item md-size-100 text-center">
          <button type="submit" class="md-button md-raised md-info md-theme-default">
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
    name: "Multiple",
    props: {
      question: { type: Object, required: true }
    },
    data() {
      return {
        checked: ''
      };
    },
    methods: {
      submit() {
        this.$emit("submit", {
          question: this.question,
          submission: { value: this.checked }
        });
      },

    }
  };
</script>