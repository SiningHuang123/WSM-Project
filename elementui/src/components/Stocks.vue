<template>
  <div>
    <p style="text-align: center; color: #606266">库存余量</p>
    <div class="block">
      <div style="font-weight: lighter; margin-bottom: 10px">货品查询：</div>
      <template>
        <span style="font-weight: lighter;"> 货品种类： </span>
        <el-select v-model="value1" placeholder="请选择货品种类"  style="width: 211px">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </template>
        <div class="input-label" style="margin-top: 5px">
          <div style="font-weight: lighter; margin-top: 5px"> 订单名称： </div>
          <el-input
              placeholder="请输入订单名称"
              v-model="订单名称">
          </el-input>
        </div>



    </div>
    <el-button type="primary" plain style="margin-top: 3px; margin-bottom: 10px; font-weight: normal">查询</el-button>
    <el-table
        :default-sort = "{prop: '创建时间', order: 'descending'}"
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        stripe
        height="450"
        border
        style="width: 100%; margin-top: 30px;">
      <el-table-column
          fixed
          label="货品名称"
          prop="货品名称"
          width="160px">
      </el-table-column>
      <el-table-column
          label="货品种类"
          prop="货品种类"
          width="120px">
      </el-table-column>
      <el-table-column
          label="库存数量"
          prop="库存数量"
          width="100px">
      </el-table-column>
      <el-table-column
          label="仓库位置"
          prop="仓库位置"
          width="100px">
      </el-table-column>

      <el-table-column
          prop="尺寸"
          label="尺寸"
          width="150px">
      </el-table-column>

      <el-table-column
          prop="口味"
          label="口味"
          width="120px">
      </el-table-column>

      <el-table-column
          prop="过期时间"
          label="过期时间"
          width="120px">
      </el-table-column>
      <el-table-column
          prop="备注"
          label="备注"
          width="120px">
      </el-table-column>

      <el-table-column
          fixed="right"
          label="库存管理"
          width="120px">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-edit" circle plain
                     @click="handleEdit(scope.$index, scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle plain
                     @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.input-label {
  display: grid;
  grid-template-columns: 1fr 2.55fr 0.2fr 1fr 2.5fr 6.3fr;
}
</style>

<script>
export default {
  name:"INOrders",
  data() {
    return {
      创建人:'',
      订单名称: '',
      订单编号: '',
      options: [{
        value: '糖果制品（含巧克力）',
        label: '糖果制品（含巧克力）'
      }, {
        value: '薯类和膨化食品',
        label: '薯类和膨化食品'
      }, {
        value: '饼干',
        label: '饼干'
      }, {
        value: '罐头',
        label: '罐头'
      }, {
        value: '乳制品',
        label: '乳制品'
      },],

      value3: [],
      value4: [],

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '近30天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',

      tableData: [{
        货品名称: '蒙牛高钙牛奶250ml',
        货品种类: '乳制品',
        库存数量: '1123',
        仓库位置: 'A-1',
        口味: '纯牛奶',
        尺寸: '1000mm*200mm',
        过期时间: '2022-01-02',
      },
        {
          货品名称: '蒙牛高钙牛奶250ml',
          货品种类: '乳制品',
          库存数量: '1123',
          仓库位置: 'A-1',
          口味: '纯牛奶',
          尺寸: '1000mm*200mm',
          过期时间: '2022-01-02',
        },
        {
          货品名称: '蒙牛高钙牛奶250ml',
          货品种类: '乳制品',
          库存数量: '1123',
          仓库位置: 'A-1',
          口味: '纯牛奶',
          尺寸: '1000mm*200mm',
          过期时间: '2022-01-02',
        }
      ],
      search: '',

    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
}
</script>

