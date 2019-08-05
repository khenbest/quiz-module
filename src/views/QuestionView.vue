<template>
  <div class="QuestionView">
    <Question />
  </div>
</template>

<script>
// @ is an alias to /src
import Question from "@/components/Question.vue";
import router from "../router.js";
export default {
  name: "QuestionView",
  components: {
    Question
  },
  methods: {
    go(pageName) {
      router.push({ name: pageName });
    }
  }
};
</script>

<style>
</style>
