<template>
  <div class="home">
    <!-- <Question /> -->
    <button @click="go">Go to create question page</button>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Question from '@/components/Question.vue'
  import router from '../router.js'
  export default {
    name: 'home',
    components: {
      Question,
    },
    methods: {
      go() {
        router.push({ name: 'createQuestion' })
      }
    }
  }
</script>