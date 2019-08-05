<template>
  <div>
    <div class="d-flex row justify-content-center">
      {{ question.prompt.slice(0, 15) }}
      <drop v-for="(drop,i) in drops" class="d-flex align-items-center ml-1" @drop="handleDrop(i, dragging)">
        <div class="underline" :class="{'text-danger fill-in-blank': !submission[i], 'text-info': submission[i]}">
          {{submission[i] ? submission[i].value : ''}}</div>
      </drop>

      <div class="col-12">
        <div v-for="drag in drags">
          <drag @dragstart="setDrag(drag)">{{displayQuestion(drag)}}</drag>
        </div>
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
  import { Drag, Drop } from "vue-drag-drop";
  import vue from "vue";
  export default {
    name: "FillInTheBlank",
    props: {
      question: { type: Object, required: true }
    },
    data() {
      return {
        submission: [],
        dragging: {}
      };
    },
    computed: {
      drags() {
        let arr = this.question.options;
        return this.shuffle(arr);
      },
      drops() {
        return this.makeDropZones(this.question.prompt);
      }
    },
    methods: {
      submit() {
        this.$emit("submit", {
          question: this.question,
          submission: this.submission
        });
      },
      shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      },
      displayQuestion(q) {
        return `${Object.values(q)[0]}`;
      },
      makeDropZones(str) {
        let arr = str.split(" ");
        let filtered = arr.filter(s => s == "___________");
        return filtered;
      },
      setDrag(drag) {
        this.dragging = drag;
      },
      handleDrop(i, dragged) {
        vue.set(this.submission, i, dragged);
      }
    },
    components: { Drag, Drop }
  };
</script>

<style>
  .underline {
    border-bottom: 1px solid;
    min-height: 25px;
  }

  .fill-in-blank {
    min-width: 130px;
  }
</style>