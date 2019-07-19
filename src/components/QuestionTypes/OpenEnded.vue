<template>
    <div class="d-flex row justify-content-center">
        <div class="col-12 mt-3">
            <h3>{{question.prompt}}</h3>

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
                checked: ''
            }
        },
        methods: {
            submit() {
                this.$emit("submit", { question: this.question, submission: this.checked })
            }
        }
    }
</script>