<template>
  <div class="md-layout-item md-alignment-center-center md-size-100">
    <md-field>
      <label>Search By Category</label>
      <md-select md-dense v-model="categories" multiple>
        <md-option md-dense v-for="category in categoriesArray" :value="category._id" :key="category._id">
          <div class="d-flex justify-content-flex-end">

            <p>
              {{category.name}}
            </p>
          </div>
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

  p {
    margin-top: 1em !important;
    margin-left: 4em !important;
  }
</style>