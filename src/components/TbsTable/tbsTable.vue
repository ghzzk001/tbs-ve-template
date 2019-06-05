<!--
标题：默认table
说明：只展示数据
-->
<template>
  <div>
    <el-table

      border
      highlight-current-row

      :data="table.data"
      :height="table.ui.tableHeight"
      v-loading="table.listLoading"

      style="width: 100%"

      @row-click="getRow"
      @selection-change="getCheckbox"
      @row-dblclick="handleTbDblclick">


      <el-table-column
        type="selection"
        width="30">
      </el-table-column>
      <el-table-column :label="$t('table.id')" width="50" header-align="center" align="center">
        <template slot-scope="scope">
          <span>{{scope.$index + (table.page.listQuery.page - 1) * table.page.listQuery.limit + 1}}</span>
        </template>
      </el-table-column>

      <template v-for="(col ,index) in table.columns">
        <el-table-column  :label="col.label" :min-width="col.width" header-align="center"  align="center">
          <template slot-scope="scope">
            <!--1.普通-->
            <template v-if="col.filter === undefined">
              <span v-if="col.showtype === 'normal'|| col.showtype === undefined">{{ scope.row[col.field] }}</span>
            </template>
            <template v-else>
              <span v-if="col.showtype === 'normal'|| col.showtype === undefined" v-html="$options.filters.formatFilter(scope.row[col.field] ,col.filter)"></span>
            </template>

            <!--2. 固定的-->
            <!--2.1 http地址-->
            <span v-if="col.showtype === 'http'" class="link-type">
              <a :href="scope.row[col.field]" target="_blank">{{ scope.row[col.field] }}</a>
            </span>

            <!--2.3 文档列表-->
            <span v-if="col.showtype === 'file'" class="link-type">
              <span v-if="scope.row[col.field].length > 0"  @click="handleFetchPv(scope.row[col.field])">{{ scope.row[col.field].length }}</span>
              <span v-else>0</span>
            </span>

            <!--2.3. 图片列表-->
            <span v-if="col.showtype === 'image'" class="link-type">
              <template  v-for="(item ,index) in scope.row[col.field]">
                <!--<img width="90px" height="60px" :src="httpImg + item.url" alt="">-->
                   <el-popover
                     placement="right"
                     title=""
                     trigger="hover">
                    <img :src="httpImg + item.url"/>
                    <img slot="reference" :src="httpImg + item.url" :alt="scope.row.title" style="max-height: 50px;max-width: 130px">
                   </el-popover>
                    &nbsp;
              </template>
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <pagination v-show="table.page.total>0" :total="table.page.total" :page.sync="table.page.listQuery.page" :limit.sync="table.page.listQuery.limit" @pagination="getList" />

    <!--文件列表dialog-->
    <el-dialog :visible.sync="dLogFileOpen" title="列表">
      <el-table :data="dLogFileData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="classCode" label="类型"/>
        <el-table-column  label="下载">
          <template slot-scope="scope">
            <a :href="httpImg + scope.row.url" :download="scope.row.title">{{ scope.row.title }}</a>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dLogFileOpen = false">{{ $t('table.confirm') }}</el-button>
      </span>
    </el-dialog>
    监控table分页页:{{table.page.listQuery}}
  </div>
</template>
<script>
  import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

  export default {
    name: 'tbsTable3',
    components: { Pagination },
    props: {
      table: Object
    },
    data() {
      return {
        //1.公用属性
        // httpImg: this.$store.getters.codeRemoteServer,  // 附件远程地址
        httpImg: "",  // 附件远程地址

        dLogFileOpen: false,
        dLogFileData:[],

        selectRow :{},
        checkboxRows:[]
      }
    },
    methods: {
      //分页查询
      getList() {
        this.$emit("callback")
      },
      //2.file文档弹出框
      handleFetchPv(data) {
        this.dLogFileData = data
        this.dLogFileOpen = true
      },
      //3.
      getRow(row, event, column){
        this.selectRow =  row
        this.$emit("callback_row",row)
      },
      getCheckbox(val){
        this.checkboxRows = val
      },
      handleTbDblclick(row, event, column){
        this.$emit("callback_dblclick",row)
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .a{
    color: #13ce66;
  }
</style>
