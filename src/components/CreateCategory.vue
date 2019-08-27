<template>
  <div class="CreateCategory md-layout md-theme-default">
    <div class="md-layout-item md-small-size-100 md-size-50">
      <md-field class="has-danger md-theme-default">
        <label>Name of New Category</label>
        <md-input v-model=newCategory></md-input>
      </md-field>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CreateCategory",
    props: [],
    data() {
      return {
        newCategory: ''
      }
    },
    computed: {
      categories() {
        return this.$store.state.categories
      }
    },
    methods: {
      CreateCategory() {
        let newCategory = this.newCategory.toUpperCase()
        if (this.categories.includes(newCategory)) {
          this.categoryAlreadyExists()
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
          text: 'Category successfully created'
        })
      }

    },
    components: {}
  }
</script>