<template>
  <div class="md-layout-item md-alignment-center-center md-size-100">
    <md-field>
      <label>Search By Category</label>
      <md-select md-dense v-model="categories" multiple>
        <md-option md-dense v-for="category in categoriesArray" :value="category._id" :key="category._id">
          {{category.name}}
        </md-option>
      </md-select>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: "Categories",
    props: ['categoriesFromParent'],
    mounted() {
      this.$store.dispatch('getCategories')
    },
    data() {
      return {
        categories: [],
        // categoriesArray: ["HTML", "CSS", "Style and Design", "Built In Methods", "SOLID", "OOP", "C#", "Scrum", "Javascript", "Design Patterns"]
      }
    },
    watch: {
      categories: function () {
        this.updateCategories()
      }
    },
    computed: {
      categoriesArray() {
        return this.$store.state.categories
      }
    },
    methods: {
      updateCategories() {
        this.$emit('change-categories', this.categories)
      }
    },
    components: {}
  }
</script>

<style>
  #category-names {
    text-align: center;
    margin-top: 1em;
  }
</style>