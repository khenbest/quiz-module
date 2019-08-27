<template>
  <div class="md-layout-item md-alignment-center-center md-size-50">

    <md-field>
      <label>Search By Category</label>
      <md-select v-model="categories" md-dense multiple>
        <md-option v-for="category in categoriesArray" :value="category._id" :key="category._id">
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