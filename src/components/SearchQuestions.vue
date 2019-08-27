<template>
  <div class="searchQuestions md-theme-default">
    <md-table-cell>
      <CategoriesComponent></CategoriesComponent>
    </md-table-cell>
    <md-table-cell>
      <md-field class="has-danger md-theme-default">
        <label>Search By Prompt</label>
        <md-input></md-input>
      </md-field>
    </md-table-cell>
    <md-table-cell>
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
    </md-table-cell>
    <!-- <md-table-cell>
      <div class="md-layout-item md-size-100"><button class="md-button md-raised md-info md-theme-default">
          <div class="md-ripple">
            <div class="md-button-content">Clear Search</div>
          </div>
        </button></div>
    </md-table-cell> -->
    <!-- <CategoriesComponent></CategoriesComponent>
    <div class="md-layout-item md-size-33">
      <md-field>
        <label>Search By Prompt</label>
        <md-input v-model="prompt"></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-size-33 text-center d-flex justify-content-row"><button
        class="md-button md-raised md-info md-theme-default">
        <div class="md-ripple">
          <div class="md-button-content">Search</div>
        </div>
      </button>
      <button type="button" class="md-button md-raised md-info md-theme-default">
        <div class="md-ripple">
          <div class="md-button-content">Cancel</div>
        </div>
      </button></div> -->
  </div>
  <!-- <div class="md-layout-item md-medium-size-100 md-size-66">
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
          </div>
        </div>
      </div>
    </div> -->

</template>

<script>
  import CategoriesComponent from '@/components/CategoriesComponent.vue'
  export default {
    name: "searchQuestions",
    props: [],
    data() {
      return {
        categories: [],
        // allCategories: ["HTML", "CSS", "Style and Design", "Built In Methods", "SOLID", "OOP", "C#", "Scrum", "Javascript", "Design Patterns"]
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