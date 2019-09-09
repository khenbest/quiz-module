<template>
    <div class="md-layout-item  md-size-100 text-center">
        <h2>{{question.prompt}}</h2>
        <div class="d-flex row justify-content-center">
            <div class="col-4">
                <div class="row justify-content-center" v-for="drag in drags">
                    <drag @dragstart="setDrag(drag)" class="drag-item  col-4 p-2">
                        <h4>
                            {{displayQuestion(drag)}}
                        </h4>
                    </drag>
                </div>
            </div>
            <div class="col-6 offset-1 justify-content-flex-end ">
                <drop v-for="drop in drops" class="d-flex justify-content-flex-end" @drop="handleDrop(drop, dragging)">
                    <div class="align-self-center"
                        :class="submission[submissionCat[drop.term]] ? 'text-info' : 'text-warning'">
                        {{
                                            submission[submissionCat[drop.term]] ? 
                                            submission[submissionCat[drop.term]].value : 
                                            "___________"
                                        }}:
                    </div>
                    <h5 class="drop-item">
                        {{displayQuestion(drop)}}
                    </h5>
                </drop>
            </div>
        </div>
        <button type="button" @click="submit" class="md-button md-sm md-info">
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
                submissionCat: {},
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
<style>
    .drag-item {
        background: #fb8c00;
        color: #fff;
        text-shadow: gray -1px 1px;
        border-radius: 3px;
        margin: 1rem;

    }

    .drag-item :hover {
        cursor: grab;
    }


    .drop-item {
        margin: 1rem;
        text-align: left;
        display: flex;
        justify-content: flex-end;
    }
</style>