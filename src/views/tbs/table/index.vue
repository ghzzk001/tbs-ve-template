<template>
  <div class="app-container">
    <tbs-table ref="table_show" :table="table" @callback="callback_tb"></tbs-table>
  </div>
</template>

<script>
  import api from '@/api/article'
  import tbsTable from '@/components/TbsTable/tbsTable.vue';
  import { table } from '@/viewsjs/tbs/table/table.js'

  export default {
    name: 'tbsTableBase',
    components: {
      tbsTable
    },
    data() {
      return {
        table: table
      }
    },
    created() {
      this.getPage()
    },
    methods: {
      getPage() {
        this.table.listLoading = true
        api.a_page(this.table.page.listQuery).then(response => {
          this.table.page.total = response.total
          this.table.data = response.items

          setTimeout(() => {
            this.table.listLoading = false
          }, 1.5 * 300)
        })
      },
      callback_tb() {
        this.getPage()
      },
    }
  }
</script>
