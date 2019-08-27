<template>
  <div class="md-layout searchQuestions md-theme-default d-flex justify-content-center flex-row">
    <!-- <md-table-cell> -->

    <CategoriesComponent></CategoriesComponent>
    <div class="md-layout-item md-small-size-100 md-size-50">
      <md-field class="has-danger md-theme-default">
        <label>Search By Prompt</label>
        <md-input></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-size-100 d-flex justify-content-row"><button
        class="md-button md-raised md-info md-theme-default">
        <div class="md-ripple">
          <div class="md-button-content">Search</div>
        </div>
      </button>
      <button class="md-button md-raised md-info md-theme-default">
        <div class="md-ripple">
          <div class="md-button-content">Clear Search</div>
        </div>
      </button>
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