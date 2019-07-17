<template>
  <div class="home">
    <CreateQuestion></CreateQuestion>
    <!-- <Question /> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import Question from '@/components/Question.vue'
  import CreateQuestion from '@/components/CreateQuestion.vue'

  export default {
    name: 'home',
    components: {
      Question,
      CreateQuestion
    }
  }
</script>