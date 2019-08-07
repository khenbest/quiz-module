<template>
  <div class="multipleChoice row justify-content-center">
    <div class="md-layout-item md-medium-size-100 md-size-66">
      <form @submit.prevent="createQuestion">
        <div class="md-card md-theme-default">
          <div class="md-card-header" data-background-color="blue">
            <h4 class="title">Multiple Choice</h4>
          </div>
          <div class="md-card-content">
            <div class="md-layout ">
              <div class="md-layout-item md-small-size-100 md-size-100">
                <!-- <div class="md-field md-theme-default md-disabled has-danger"> -->
                <md-field class="has-danger md-theme-defult">
                  <label>Question Prompt</label>
                  <md-input v-model="newQuestion.prompt"></md-input>
                </md-field>

              </div>
              <div class="md-layout-item md-small-size-100 md-size-20 mx-auto">
                <md-field class="has-danger">
                  <label id="optionNumber">Number of Options</label>
                  <md-select v-model="selected" id="optionNumber">
                    <md-option :value="4">4</md-option>
                    <md-option :value="5">5</md-option>
                  </md-select>
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100 md-size-100">
                <span v-for="(option, index) in newQuestion.options" class="d-flex flex-row">
                  <md-field class="has-danger d-flex flex-row">
                    <md-radio type="radio" v-model="newQuestion.correct[0]" :value="newQuestion.options[index]"
                      required>
                    </md-radio>
                    <span>
                      <label class="ml-5">Option {{index + 1}}: </label>
                      <md-input v-model="option.value" type="text" required></md-input>
                    </span>
                  </md-field>
                </span>
              </div>

              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-field class="has-danger">
                  <label>Rationale: </label>
                  <md-input v-model="newQuestion.rationale" type="text"></md-input>
                </md-field>
              </div>

              <div class="md-layout-item md-size-100 text-center">
                <button type="submit" class="md-button md-raised md-info md-theme-default">
                  <div class="md-ripple">
                    <div class="md-button-content">Submit</div>
                  </div>
                </button>
                <button type="button" class="md-button md-raised md-info md-theme-default" @click="reset">
                  <div class="md-ripple">
                    <div class="md-button-content">Cancel</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "multipleChoice",
    props: [],
    data() {
      return {
        selected: 4,
        newQuestion: {
          prompt: '',
          options: [
            { value: '' },
            { value: '' },
            { value: '' },
            { value: '' }
          ],
          correct: [],
        }
      }
    },
    computed: {},
    watch: {
      selected: function () {
        this.adjustOptions()
      }
    },
    methods: {
      adjustOptions() {
        if (this.selected == this.newQuestion.options.length) { return }
        else if (this.selected == 5) {
          this.newQuestion.options.push({ value: '' })
        } else { this.newQuestion.options.pop() }
      },
      createQuestion() {
        if (this.newQuestion.correct.length < 1) { return this.requiredAlert() }
        let question = JSON.parse(JSON.stringify(this.newQuestion))
        this.$emit("createQuestion", question)
        this.reset()
      },
      reset() {
        this.selected = 4
        this.newQuestion.prompt = ''
        for (let i = 0; i < this.newQuestion.options.length; i++) {
          this.newQuestion.options[i].value = ''
        }
        this.newQuestion.correct = []
      },
      requiredAlert() {
        this.$swal({
          title: 'Required',
          text: 'Please Select The Correct Option',
          showCloseButton: true,
          confirmButtonColor: "#fb8c00"

        });
      }


    },
    components: {}
  }
</script>