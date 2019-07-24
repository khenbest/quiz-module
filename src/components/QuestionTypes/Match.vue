<template>
    <div>
        {{question.prompt}}
        <div class="d-flex row justify-content-center">
            <div class="col-5">
                <div v-for="drag in drags">
                    <drag @dragstart="setDrag(drag)">
                        {{displayQuestion(drag)}}
                    </drag>
                </div>
            </div>
            <div class="col-5">
                <drop v-for="drop in drops" class="d-flex align-items-center" @drop="handleDrop(drop, dragging)">
                    <div class="mr-1" :class="submission[submissionCat[drop.term]] ? 'text-info' : 'text-danger'">
                        {{
                                            submission[submissionCat[drop.term]] ? 
                                            submission[submissionCat[drop.term]].value : 
                                            "___________"
                                        }}:
                    </div>
                    {{displayQuestion(drop)}}
                </drop>
            </div>
        </div>
        <button class="btn btn-outline-dark" @click="submit">Submit</button>
    </div>
</template>

<script>
    import { Drag, Drop } from 'vue-drag-drop'
    import vue from 'vue'
    export default {
        name: "Match",
        props: {
            question: { type: Object, required: true }
        },
        data() {
            return {
                submission: [],
                dragging: {},
                submissionCat: {}
            }
        },
        computed: {
            drags() {
                return this.question.options.filter(o => o.isDefinition == false)
            },
            drops() {
                return this.question.options.filter(o => o.isDefinition == true)
            },
        },
        methods: {
            submit() {
                this.$emit("submit", { question: this.question, submission: this.submission })
            },
            displayQuestion(q) {
                return `${Object.values(q)[0]}`
            },
            setDrag(drag) {
                this.dragging = drag
            },
            handleDrop(droppedOn, dragged) {
                let i
                if (this.submissionCat[droppedOn.term] != undefined) {
                    i = this.submissionCat[droppedOn.term]
                } else {
                    i = this.submission.length
                    this.submissionCat[droppedOn.term] = i
                }
                vue.set(this.submission, i, { value: dragged.term, definition: droppedOn.term })
                vue.set(this.submissionCat, droppedOn.term, i)
            },
        },
        components: { Drag, Drop },
    }
</script>