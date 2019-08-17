<template>
  <div class="row justify-content-center mt-3">
    <md-field class="col-3">
      <label>Categories</label>
      <md-select v-model="categories" multiple>
        <md-option v-for="category in categoriesArray" :value="category">
          <h6 id="category-names">
            {{category}}
          </h6>
        </md-option>
      </md-select>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: "Categories",
    props: ['categoriesFromParent'],
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
    computed: {},
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