<template>
  <!-- <div class="searchQuestions col-sm-12"> -->
  <div class="searchQuestions">
    <div class="col">
      <h1>Search questions by categories</h1>
    </div>
    <CategoriesComponent v-on:change-categories="updateCategories($event)"></CategoriesComponent>
    <button @click="search">search</button>
  </div>
  <!-- </div> -->
</template>

<script>
  import CategoriesComponent from '@/components/CategoriesComponent.vue'
  export default {
    name: "searchQuestions",
    props: [],
    data() {
      return {
        categories: [],

      }
    },
    computed: {},
    methods: {
      updateCategories(payload) {
        this.categories = payload
      },
      search() {
        this.$store.dispatch('searchQuestions', this.categories)

      }
    },
    components: {
      CategoriesComponent
    }
  }
</script>