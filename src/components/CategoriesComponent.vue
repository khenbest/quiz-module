<template>
  <div class="row justify-content-center mt-3">
    <div class="col-8 justify-content-center">
      <md-checkbox v-for="category in categoriesArray" v-model="categories" :value="category">{{category}}
      </md-checkbox>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props: [],
    data() {
      return {
        categories: [],
        categoriesArray: ["HTML", "CSS", "Style and Design", "Built In Methods", "SOLID", "OOP", "C#", "Scrum", "Javascript", "Design Patterns"]
      }
    },
    watch: {
      categories: function () {
        this.updateCategories()
      }
    },
    computed: {
    },
    methods: {
      updateCategories() {
        this.$emit('change-categories', this.categories)
      }
    },
    components: {}
  }
</script>