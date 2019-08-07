<template>
    <div class="md-layout-item md-small-size-100 md-size-100">
        <div class="col-12 mt-3">
            <h3>{{question.prompt}}</h3>
            <form @submit.prevent="submit" class="form-row justify-content-center">
                <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field class="has-danger md-theme-defult">
                        <label>Answer: </label>
                        <md-textarea v-model="answer"></md-textarea>
                    </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-center">
                    <button type="submit" class="md-button md-raised md-info md-theme-default">
                        <div class="md-ripple">
                            <div class="md-button-content">Submit</div>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OpenEnded",
        props: {
            question: { type: Object, required: true }
        },
        data() {
            return {
                answer: ''
            }
        },
        methods: {
            submit() {
                this.$emit("submit", { question: this.question, submission: { value: this.answer } })
            }
        }
    }
</script>