<template>
    <div>
        {{question.prompt}}
        <div class="d-flex row justify-content-center">
            <div class="col-5">
                <drag :transfer-data="prop" v-for="prop in question.options">drag</drag>
                <drop @drop="handleDrop">drop</drop>
                <textarea draggable="true" class="form-control mb-1" :placeholder="displayQuestion(prop)"
                    readonly></textarea>
            </div>
            <!-- <div class="col-5">
                <input v-for="prop in question" class="form-control mb-2" type="text"
                    :placeholder="displayQuestion(prop)" readonly>
            </div> -->
        </div>
    </div>
</template>

<script>
    import { Drag, Drop } from 'vue-drag-drop'
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
            displayQuestion(q) {
                return `${Object.values(q)[0]}`
            },
            handleDrop(data) {
                alert(`You dropped with data: ${JSON.stringify(data)}`);
            },
        },
        components: { Drag, Drop },
    }
</script>