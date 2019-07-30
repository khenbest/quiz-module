<template>
  <div class="createTest container-fluid">
    <h1>create a test</h1>
    <div class="row">
      <SearchQuestions></SearchQuestions>
    </div>
  </div>
</template>

<script>
  import SearchQuestions from '@/components/SearchQuestions.vue'
  export default {
    name: "createTest",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      SearchQuestions
    }
  }
</script>