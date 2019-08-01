<md-toolbar class="md-warning" md-elevation="1">
    <h3 class="md-title" style="flex: 1">SearchBar</h3>
    <md-field md-clearable class="md-toolbar-section-end">
        <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
    </md-field>
</md-toolbar>