<template>
  <div class="QuestionView">
    <Question v-if="activeQuiz.questions" />
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
    computed: {
      activeQuiz() {
        return this.$store.state.activeQuiz
      }
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