<template>
  <div class="search-page">
    <h1 class="search-headline">入库订单</h1>
    <div class="search">
      <div class="search-bar">
        <el-input
        placeholder="选择入单日期"
        suffix-icon="el-icon-date"
        v-model="input1"
        style="justify-content: center">
        </el-input>
        <el-input
        placeholder="搜索订单号"
        suffix-icon="el-icon-search"
        v-model="input2">
        </el-input></div>
      <div class="search-result">
        <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            stripe
            style="width: 100%">
          <el-table-column
              fixed
              label="Date"
              prop="date">
          </el-table-column>
          <el-table-column
              label="Name"
              prop="name">
          </el-table-column>
          <el-table-column
              prop="name"
              label="姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="province"
              label="省份"
              width="120">
          </el-table-column>
          <el-table-column
              prop="city"
              label="市区"
              width="120">
          </el-table-column>
          <el-table-column
              prop="address"
              label="地址"
              width="300">
          </el-table-column>
          <el-table-column
              prop="zip"
              label="邮编"
              width="120">
          </el-table-column>
          <el-table-column
              align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<style>
.search-headline {
  text-align: center;
}

.search {
  margin-top: 30px;
  display: grid;
}

</style>

<script>
export default {
  name: "Search",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>
