<template>
    <div>
        {{question}}
        <div class="d-flex row justify-content-center">
            <div class="col-5">
                <textarea v-for="prop in question.options" class="form-control mb-1"
                    :placeholder="displayQuestionVal(prop)" readonly></textarea>
            </div>
            <div class="col-5">
                <input v-for="prop in question.options2" class="form-control mb-2" type="text"
                    :placeholder="displayQuestionVal(prop)" readonly>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Match",
        props: {
            question: { type: Object, required: true }
        },
        data() {
            return {
                checked: ''
            }
        },
        methods: {
            submit() {
                this.$emit("submit", { question: this.question, submission: this.checked })
            },
            displayQuestionVal(q) {
                return `${Object.values(q)[0]}`
            },
            displayQuestionKey(q) {
                return `${Object.keys(q)[0]}`
            }
        }
    }
</script>