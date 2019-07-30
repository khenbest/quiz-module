<template>
  <div class="home">
    <Question />
    <button @click="go('createQuestion')">Go to create question page</button>
    <button @click="go('createTest')">Go to create test page</button>
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
      go(pageName) {
        router.push({ name: pageName })
      }
    }
  }
</script>