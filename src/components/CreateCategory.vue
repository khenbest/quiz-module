<template>
  <form @submit.prevent="createCategory">
    <div class="CreateCategory md-layout md-theme-default md-alignment-center-center ">
      <div class="md-layout-item md-size-66 md-small-size-100">
        <md-field class="has-danger md-theme-default">
          <label>Name of New Category</label>
          <md-input v-model="newCategory.name"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-33 md-small-size-100  md-alignment-center-center">
        <button type="submit" class="md-button md-raised md-info md-theme-default">
          <div class="md-ripple ">
            <div class="md-button-content ">Submit</div>
          </div>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: "CreateCategory",
    props: [],
    data() {
      return {
        newCategory: {
          name: ''
        }
      }
    },
    computed: {
      categories() {
        return this.$store.state.categories
      }
    },
    methods: {
      createCategory() {
        let newCategory = {}
        newCategory.name = this.newCategory.name.toUpperCase()
        if (this.categories.includes(newCategory)) {
          return this.categoryAlreadyExists()
        }
        this.$store.dispatch('createCategory', { newCategory, alert: this.success })
      },
      categoryAlreadyExists() {
        this.$swal({
          title: this.newCategory + ' already exists',
          text: 'This category already exists, please create a new one',
          showCloseButton: true,
          confirmButtonColor: "#fb8c00"

        });
      },
      success() {
        this.$swal({
          title: 'Success!',
          text: 'Category successfully created',
          confirmButtonColor: '#00bcd4'
        })
      }

    },
    components: {}
  }
</script>