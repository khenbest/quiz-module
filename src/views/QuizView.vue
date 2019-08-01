<md-toolbar class="md-warning" md-elevation="1">
    <h3 class="md-title" style="flex: 1">SearchBar</h3>
    <md-field md-clearable class="md-toolbar-section-end">
        <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
    </md-field>
</md-toolbar>

<!-- create quiz section -->
<div v-else class="row justify-content-center mb-0">
    <!--table needs v-model both places DON'T delete one-->
    <md-table class="col-8" v-model="selectedQuestions" md-sort="question" md-sort-order="asc" md-card md-fixed-header>
        <md-table-toolbar class="md-header my-3" data-background-color="blue">
            <h1 class="md-title" style="color:white !important; text-shadow: gray 0 1px; font-weight: 500;">Questions
            </h1>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" v-for="question in questions">
            <md-table-cell md-label="Prompt" md-sort-by="question.prompt">{{ question.prompt }}
            </md-table-cell>
            <md-table-cell md-label="Type" md-sort-by="question.type">{{ question.type }}</md-table-cell>
            <md-table-cell md-label="Categories" md-sort-by="question.categories">{{ prettify(question.categories) }}
            </md-table-cell>
            <md-table-cell md-label="Selected">
                <md-checkbox v-model="selectedQuestions" :value="question">
                    <!--table needs v-model both places DON'T delete one-->
                </md-checkbox>
            </md-table-cell>
        </md-table-row>
    </md-table>
    <div class="row mt-0 mb-2 justify-content-center">
        <div class="col-4">
            <md-button @click="createQuiz" class="md-ripple md-info ">
                Submit
            </md-button>
        </div>
    </div>
</div>
<!-- ##end-region create quiz section -->