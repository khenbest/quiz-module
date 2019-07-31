<template>
  <div class="createTest container-fluid">
    <h1>create a test</h1>
    <div class="row">
      <SearchQuestions></SearchQuestions>
      <!-- end of real stuff -->

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <div class="md-card md-card-plain md-theme-default">
          <div class="md-card-header" data-background-color="green">
            <h4 class="title">Table on Plain Background</h4>
            <p class="category">Here is a subtitle for this table</p>
          </div>
          <div class="md-card-content">
            <div>
              <div class="md-content md-table md-theme-default" table-header-color=""
                value="[object Object],[object Object],[object Object],[object Object]">
                <!---->
                <!---->
                <div class="md-content md-table-content md-scrollbar md-theme-default">
                  <table>
                    <thead>
                      <tr>
                        <!---->
                        <th class="md-table-head">
                          <div class="md-table-head-container md-ripple md-disabled">
                            <div class="md-table-head-label">
                              <!---->

                              ID

                              <!---->
                            </div>
                          </div>
                        </th>
                        <th class="md-table-head">
                          <div class="md-table-head-container md-ripple md-disabled">
                            <div class="md-table-head-label">
                              <!---->

                              Name

                              <!---->
                            </div>
                          </div>
                        </th>
                        <th class="md-table-head">
                          <div class="md-table-head-container md-ripple md-disabled">
                            <div class="md-table-head-label">
                              <!---->

                              Salary

                              <!---->
                            </div>
                          </div>
                        </th>
                        <th class="md-table-head">
                          <div class="md-table-head-container md-ripple md-disabled">
                            <div class="md-table-head-label">
                              <!---->

                              Country

                              <!---->
                            </div>
                          </div>
                        </th>
                        <th class="md-table-head">
                          <div class="md-table-head-container md-ripple md-disabled">
                            <div class="md-table-head-label">
                              <!---->

                              City

                              <!---->
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="md-table-row">
                        <!---->
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">1</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Dakota Rice</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">$36,738</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Niger</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Oud-Turnhout</div>
                        </td>
                      </tr>
                      <tr class="md-table-row">
                        <!---->
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">2</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Minerva Hooper</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">$23,738</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Curaçao</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Sinaai-Waas</div>
                        </td>
                      </tr>
                      <tr class="md-table-row">
                        <!---->
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">3</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Sage Rodriguez</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">$56,142</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Netherlands</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Overland Park</div>
                        </td>
                      </tr>
                      <tr class="md-table-row">
                        <!---->
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">4</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Philip Chaney</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">$38,735</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Korea, South</div>
                        </td>
                        <td class="md-table-cell">
                          <div class="md-table-cell-container">Gloucester</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!---->
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
  import SearchQuestions from '@/components/SearchQuestions.vue'
  export default {
    name: "createTest",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      SearchQuestions
    }
  }
</script>