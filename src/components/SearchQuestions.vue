<template>
  <!-- <div class="searchQuestions col-sm-12"> -->
  <div class="searchQuestions">

    <div class="md-layout-item md-medium-size-100 md-size-66">
      <div class="md-card md-theme-default">
        <div class="md-card-header" data-background-color="orange">
          <h4 class="title"><strong>Search By Category</strong>
            <i class="ml-1 text-white fas " :class="[selectTypeOpen ? 'fa-minus' : 'fa-plus']"
              @click="selectTypeOpen = !selectTypeOpen"></i></h4>
        </div>
        <div>
          <div class="md-content md-table md-theme-default" table-header-color="orange"
            value="[object Object],[object Object],[object Object],[object Object]">
            <div class="md-content md-table-content md-scrollbar md-theme-default">
              <CategoriesComponent v-on:change-categories='updateCategories($event)'></CategoriesComponent>
            </div>
            <div class="md-layout-item md-size-100 text-right"><button type="button" @click="search"
                class="md-button md-raised md-info md-theme-default">
                <div class="md-ripple">
                  <div class="md-button-content">Submit</div>
                </div>
              </button></div>
            <!---->
          </div>
        </div>
      </div>
    </div>
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