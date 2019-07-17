<template>
    <div class="d-flex row justify-content-center">
        <div class="col-12 mt-3">
            <h3>{{question.prompt}}</h3>
            <form @submit.prevent="submit" class="form-row justify-content-center">
                <div class="form-check justify-space-between m-2">
                    <input class="form-check-input" v-model="checked" type="radio" name="option" id="a" value="a"
                        checked>
                    <label class="form-check-label" for="a">
                        True
                    </label>
                </div>
                <div class="form-check justify-space-between m-2">
                    <input class="form-check-input" v-model="checked" type="radio" name="option" id="b" value="b"
                        checked>
                    <label class="form-check-label" for="b">
                        False
                    </label>
                </div>
                <div class="col-12">
                    <button class="btn btn-success mt-3" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TrueFalse",
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