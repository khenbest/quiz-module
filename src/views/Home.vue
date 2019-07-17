<template>
  <div class="home">
    <Question />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Question from '@/components/Question.vue'

  export default {
    name: 'home',
    components: {
      Question
    }
  }
</script>