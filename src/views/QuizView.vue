<template>
    <div class="page-container " style="height: 70vh">
        <md-app>
            <md-app-toolbar class="md-primary">
                <span class="md-title">My Title</span>
            </md-app-toolbar>

            <md-app-drawer md-permanent="full">
                <md-toolbar class="md-transparent" md-elevation="0">
                    Navigation
                </md-toolbar>

                <md-list>
                    <md-list-item>
                        <button @click="go('createQuestion')" type="button"
                            class="md-button md-primary md-theme-default">
                            <div class="md-ripple">
                                <div class="md-button-content">Create A Question</div>
                            </div>
                        </button>
                    </md-list-item>

                    <md-list-item>
                        <button @click="go('Questions')" type="button" class="md-button  md-primary md-theme-default">
                            <div class="md-ripple">
                                <div class="md-button-content">Test Question(s)</div>
                            </div>
                        </button>
                    </md-list-item>

                    <md-list-item>
                        <button @click="go('createTest')" type="button" class="md-button md-primary md-theme-default">
                            <div class="md-ripple">
                                <div class="md-button-content">Create A Quiz</div>
                            </div>
                        </button>
                    </md-list-item>

                </md-list>
            </md-app-drawer>

            <md-app-content class="md-scrollbar" v-for="question in results">

            </md-app-content>
        </md-app>
    </div>
</template>


<script>
    // @ is an alias to /src
    import CategoriesComponent from '@/components/CategoriesComponent.vue'

    import Question from "@/components/Question.vue";
    import SearchQuestion from '@/components/SearchQuestions.vue'
    import router from "../router.js";
    export default {
        name: "home",
        data() {
            return {
                selectedQuestions: []
            }
        },
        components: {
            Question
        },
        mounted() {
            this.$store.dispatch("getQuestions");
        },
        computed: {

            results() {
                if (this.$store.state.searchResults.length === 0) {
                    return this.$store.state.questions;
                }
                else {
                    return this.$store.state.searchResults;
                }
            }
        },
        methods: {
            prettify(arr) {
                let str = arr.join(" ");
                return str;
            },
            go(pageName) {
                router.push({ name: pageName });
            },
            createQuiz() {
                this.$store.dispatch("createQuiz", this.selectedQuestions)
            }
        },
        components: {
            SearchQuestion,
            CategoriesComponent
        }
    };
</script>
<style scoped>
    .md-app {
        max-height: 400px;
        border: 1px solid rgba(#000, .12);
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>