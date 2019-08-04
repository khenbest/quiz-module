<template>
  <div class="home">
    <searchQuestion></searchQuestion>
    <create-quiz></create-quiz>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavButtons from '@/components/NavButtons.vue'
  import Question from "@/components/Question.vue";
  import SearchQuestion from '@/components/SearchQuestions.vue'
  import CreateQuiz from '@/components/CreateQuiz.vue'
  import router from "../router.js";
  export default {
    name: "home",
    data() {
      return {
      }
    },

    mounted() {
    },
    computed: {

    },
    methods: {


    },
    components: {
      SearchQuestion,
      NavButtons,
      Question,
      CreateQuiz
    }
  };
</script>