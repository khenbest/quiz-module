<template>
  <div class="searchQuestions md-layout justify-content-center">

    <div class="md-layout-item md-medium-size-100 md-size-66">
      <div class="md-card md-theme-default">
        <div class="md-card-header" data-background-color="orange">
          <h4 class="md-title" style="text-shadow: darkgray -1px -1px;">Search By Category</h4>
        </div>
        <div>
          <div class="md-content md-theme-default" table-header-color="orange">
            <div class="md-content md-theme-default">
              <CategoriesComponent v-on:change-categories='updateCategories($event)'></CategoriesComponent>
            </div>
            <div class="md-layout-item md-size-100 justify-content-center my-2"><button type="button" @click="search"
                class="md-button md-raised md-warning md-theme-default">
                <div class="md-ripple">
                  <div class="md-button-content ">Search</div>
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
        allCategories: ["HTML", "CSS", "Style and Design", "Built In Methods", "SOLID", "OOP", "C#", "Scrum", "Javascript", "Design Patterns"]

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
      }
    },
    components: {
      CategoriesComponent
    }
  }
</script>