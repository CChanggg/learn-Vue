<template>
  <div class="allActive">
    <!-- data 有数据就是表格的每一行
    表格应该分为表头以及数据生成的每一行
    排序 翻页 -->
    <el-table :data="filteredTableData">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column property="title" label="活动名称"></el-table-column>
      <el-table-column property="type" label="活动分类"></el-table-column>
      <el-table-column property="status" label="活动状态"></el-table-column>
      <el-table-column property="readNum" label="浏览数"></el-table-column>
      <el-table-column property="signUpNum" label="报名数"></el-table-column>
      <el-table-column property="auditNum" label="待审核"></el-table-column>
      <el-table-column property="id" label="操作" inline-template align="center">
        <el-button type="text" size="mini">查看详情</el-button>
      </el-table-column>
    </el-table>
   <el-row type="flex" justify="end"
     style="padding:20px 0;">
     <el-pagination
      :current-page="5"
      :page-sizes="[100,200,300,400]"
      :page-size="100"
      layout="sizes,prev,pager,next"
      :total="1000">
     </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
data() {
  return{
    tableData: [
          {
            id: '001',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }, {
            id: '002',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }, {
            id: '003',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }, {
            id: '004',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }
    ]
  }
},
computed: {
  filteredTableData:function() {
    return this.tableData
  }
}
}
</script>

<style>

</style>
