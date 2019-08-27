<template>
  <div class="searchQuestions md-theme-default md-layout">
    <div class="md-layout-item md-alignment-center-center md-size-33">
      <CategoriesComponent></CategoriesComponent>
    </div>
    <div class="md-layout-item md-size-66 d-flex justify-content-center row">
      <div class="md-layout-item md-size-66 d-flex justify-content-center row">
        <md-field class="has-danger md-theme-default">
          <label>Search By Prompt</label>
          <md-input></md-input>
        </md-field>
      </div>
      <div class="md-layout-item d-flex align-content-center justify-content-flex-end row">
        <button class="md-button md-raised md-info md-theme-default">
          <div class="md-ripple">
            <div class="md-button-content">Search</div>
          </div>
        </button>
        <button class="md-button md-raised md-info md-theme-default">
          <div class="md-ripple">
            <div class="md-button-content">Clear</div>
          </div>
        </button>
      </div>
    </div>

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