<template>
    <div class="d-flex row justify-content-center">
        <div class="col-12 mt-3">
            <h3>{{question.prompt}}</h3>
            <form @submit.prevent="submit" class="form-row justify-content-center">
                <div v-for="option in question.options" class="form-check justify-space-between m-2">
                    <input class="form-check-input" type="checkbox" name="option" @change="toggleChecked(option)">
                    <label class="form-check-label">
                        {{displayQuestion(option)}}
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
        name: "Multiple",
        props: {
            question: { type: Object, required: true }
        },
        data() {
            return {
                checked: {
                    a: '',
                    b: '',
                    c: '',
                    d: ''
                }
            }
        },
        methods: {
            submit() {
                this.$emit("submit", { question: this.question, submission: this.checked })
            },
            displayQuestion(q) {
                return `${Object.values(q)[0]}`
            },
            toggleChecked(option) {
                let [prop, val] = Object.entries(option)[0]
                console.log(val)
                if (this.checked[prop]) {
                    this.checked[prop] = false
                } else {
                    this.checked[prop] = val
                }
            }
        }
    }
</script>