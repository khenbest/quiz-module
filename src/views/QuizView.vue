<template>
    <div class="row justify-content-center">
        <div class="md-layout-item md-medium-size-75 md-xsmall-size-75 md-size-75">
            <div class="md-card md-theme-default">
                <div class="md-card-header" data-background-color="orange">
                    <h4 class="title">Quiz Creator</h4>
                    <p class="category">Add questions from below</p>
                </div>
                <div class="md-card-content">
                    <div>
                        <div class="md-content md-table md-theme-default" table-header-color="gray" value>
                            <div class="md-content md-table-content md-scrollbar md-theme-default">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="md-table-head">
                                                <div class="md-table-head-container md-ripple md-disabled">
                                                    <div class="md-table-head-label">Prompt</div>
                                                </div>
                                            </th>
                                            <th class="md-table-head">
                                                <div class="md-table-head-container md-ripple md-disabled">
                                                    <div class="md-table-head-label">Type</div>
                                                </div>
                                            </th>
                                            <th class="md-table-head">
                                                <div class="md-table-head-container md-ripple md-disabled">
                                                    <div class="md-table-head-label">Categories</div>
                                                </div>
                                            </th>
                                            <th class="md-table-head">
                                                <div class="md-table-head-container md-ripple md-disabled">
                                                    <div class="md-table-head-label">Selected</div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="question in questions" :key="question._id">
                                        <tr class="md-table-row">
                                            <td class="md-table-cell">
                                                <div class="md-table-cell-container">{{question.prompt}}</div>
                                            </td>
                                            <td class="md-table-cell">
                                                <div class="md-table-cell-container">{{question.type}}</div>
                                            </td>
                                            <td class="md-table-cell">
                                                <div class="md-table-cell-container">{{prettify(question.categories)}}
                                                </div>
                                            </td>
                                            <td class="md-table-cell">
                                                <div class="md-table-cell-container justify-content-end">
                                                    <md-checkbox v-model="selectedQuestions" :value="question">
                                                    </md-checkbox>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>