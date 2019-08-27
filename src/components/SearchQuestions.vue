<template>
  <div class="searchQuestions md-theme-default md-layout">
    <div class="md-layout-item md-alignment-center-center md-size-33">
      <CategoriesComponent></CategoriesComponent>
    </div>
    <div class="md-layout-item md-size-33">
      <md-field class="has-danger md-theme-default">
        <label>Search By Prompt</label>
        <md-input></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-size-33 d-flex align-items-center justify-content-center">
      <button class="md-button md-raised md-info md-theme-default ">
        <div class="md-ripple">
          <div class="md-button-content">Search</div>
        </div>
      </button>
      <button class="md-button md-raised md-info md-theme-default ">
        <div class="md-ripple">
          <div class="md-button-content">Clear</div>
        </div>
      </button>
      <div id="add-question" class="d-flex align-items-center ml-1">
        <i class="fas fa-lg fa-plus text-info" @click="showInput = !showInput"></i>
      </div>
    </div>
    <div v-show="showInput" class="md-layout-item md-alignment-center-center md-size-100">

    </div>
  </div>
</template>

<script>
  import CategoriesComponent from '@/components/CategoriesComponent.vue'
  export default {
    name: "searchQuestions",
    props: [],
    data() {
      return {
        showInput: false,
        categories: [],
        prompt: ''
      }
    },
    computed: {},
    methods: {
      updateCategories(payload) {
        this.categories = payload
      },
      search() {
        let searchPayload = ''
        if (this.categories.length > 0) {
          searchPayload = this.categories;
        }
        else {
          searchPayload = this.allCategories;
        }
        this.$store.dispatch('searchQuestions', searchPayload)
        this.resetCategories()
      },
      resetCategories() {
        this.categories = []
      }

    },
    components: {
      CategoriesComponent
    }
  }
</script>
<style>
  #add-question:hover {
    cursor: pointer;
  }
</style>