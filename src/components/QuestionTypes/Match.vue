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
        <button type="submit" class="md-button md-sm md-info">
            <div class="md-ripple">
                <div class="md-button-content">Submit</div>
            </div>
        </button>
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
                let arr = this.question.options.filter(o => o.isDefinition == false)
                return this.shuffle(arr)
            },
            drops() {
                let arr = this.question.options.filter(o => o.isDefinition == true)
                return this.shuffle(arr)
            },
        },
        methods: {
            submit() {
                this.$emit("submit", { question: this.question, submission: this.submission })
            },
            shuffle(a) {
                for (let i = a.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a;
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