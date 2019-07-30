<template>
  <!-- <div class=" "> -->
  <div class="col-sm-12 col-md-6 offset-md-3 d-flex justify-content-between flex-wrap">
    <button class="btn btn-outline-info mx-auto my-2" v-for="category in categoriesArray"
      @click="checkCategoryStatus(category)">{{category}} <i class="fas"
        :class="[categories.includes(category) ? 'fa-check' : 'fa-plus']"></i></button>
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
    computed: {},
    methods: {
      addToCategories(category) {
        console.log(category)
        this.categories.push(category)
        this.updateCategories()
      },
      removeFromCategories(category) {
        let index = this.categories.indexOf(category)
        this.categories.splice(index, 1)
        this.updateCategories()
      },
      checkCategoryStatus(category) {
        if (this.categories.includes(category)) {
          this.removeFromCategories(category)
        } else {
          this.addToCategories(category)
        }
      },
      updateCategories() {
        this.$emit('change-categories', this.categories)
      }
    },
    components: {}
  }
</script>