<template>
  <div class="CreateQuestion container-fluid">
    <h1>create question page</h1>
    <CreateQuestionComponent></CreateQuestionComponent>

  </div>
</template>

<script>
  import CreateQuestionComponent from '@/components/CreateQuestionComponent.vue'
  export default {
    name: "CreateQuestion",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      CreateQuestionComponent
    }
  }
</script>