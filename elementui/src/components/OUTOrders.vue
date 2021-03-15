<template>
  <div>
    <p style="text-align: center; color: #606266">管理/搜索出库订单</p>
    <div class="block">
      <div style="font-weight: lighter; margin-bottom: 10px">订单查询：</div>
      <template>
        <span style="font-weight: lighter;">出库时间：</span>
        <el-date-picker
            v-model="value2"
            type="date"
            placeholder="选择查询时间"
            :picker-options="pickerOptions"
            style="margin-left: 5px; width:213px">
        </el-date-picker>

        <span style="font-weight: lighter; margin-left: 10px;"> 出库状态： </span>
        <el-select v-model="value1" multiple placeholder="请选择出库状态"  style="width: 207px">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </template>

      <div>
        <div class="input-label" style="margin-top: 5px">

          <div style="font-weight: lighter; display:inline; margin-top: 5px"> 订单编号： </div>
          <el-input
              placeholder="请输出订单编号"
              v-model="订单编号">
          </el-input>
          <div>
          </div>
          <div style="font-weight: lighter; display:inline; margin-top: 5px"> 订单名称： </div>
          <el-input
              placeholder="请输出订单名称"
              v-model="订单名称">
          </el-input>
          <div></div>
          <div style="font-weight: lighter; display:inline; margin-top: 10px"> 创建人： </div>
          <el-input
              placeholder="请输入创建人姓名"
              v-model="创建人"
              style="margin-top: 5px;">
          </el-input>
        </div>
      </div>
    </div>

    <el-button type="primary" plain style="margin-top: 3px; margin-bottom: 10px; font-weight: normal">查询</el-button>
    <el-table
        :default-sort = "{prop: '创建时间', order: 'descending'}"
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        stripe
        height="450"
        border
        style="width: 100%">
      <el-table-column
          fixed
          label="订单名称"
          prop="订单名称"
          width="150px">
      </el-table-column>
      <el-table-column
          label="订单编号"
          prop="订单编号"
          width="150px">
      </el-table-column>
      <el-table-column
          label="出库数量"
          prop="出库数量"
          width="80px">
      </el-table-column>
      <el-table-column
          label="库存"
          prop="库存"
          width="80px">

      </el-table-column>
      <el-table-column
          prop="出库位置"
          label="出库位置"
          width="120">
      </el-table-column>

      <el-table-column
          prop="订单状态"
          label="订单状态"
          width="85px">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>订单状态: {{ scope.row.订单状态 }}</p>
            <div slot="reference" class="name-wrapper" style="text-align: center">
              <el-tag size="medium" type="warning" v-if="scope.row.订单状态 === '已出库'">{{ scope.row.订单状态 }}</el-tag>
              <el-tag size="medium" type="info" v-if="scope.row.订单状态 === '未出库'">{{ scope.row.订单状态 }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
          prop="创建人"
          label="创建人"
          width="80">
      </el-table-column>

      <el-table-column
          prop="收货方"
          label="收货方"
          width="180px">
      </el-table-column>
      <el-table-column
          prop="收货方地址"
          label="收货方地址"
          width="180px">
      </el-table-column>
      <el-table-column
          prop="收货方对接人"
          label="收货方对接人"
          width="120px">
      </el-table-column>
      <el-table-column
          prop="对接人联系方式"
          label="对接人联系方式"
          width="120px">
      </el-table-column>
      <el-table-column
          prop="操作"
          label="操作"
          width="100">
        <a href="#" style="color: slategray">查看明细</a>
      </el-table-column>
      <el-table-column
          prop="备注"
          label="备注"
          width="120px">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="出库订单管理"
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
        value: '未出库',
        label: '未出库'
      }, {
        value: '已出库',
        label: '已出库'
      }],
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
        订单编号: 'X9083746734443',
        订单名称: '蒙牛高钙牛奶250ml',
        出库数量: '94',
        库存: '0',
        收货方地址: '内蒙古呼和浩特市和林格尔盛乐经济园区',
        收货方: '内蒙古蒙牛乳业（集团）股份有限公司',
        收货方对接人: '张三',
        订单状态: '已出库',
        创建时间: '2021-03-01',
        出库位置: 'KS944-RUR',
        对接人联系方式: '12345678910',
        创建人: "陈刚"
      }, {
        订单编号: 'X1234567890',
        订单名称: '农夫山泉净含量5L',
        出库数量: '2049',
        库存: '1002',
        收货方: '农夫山泉股份有限公司',
        收货方地址: '广东省河源市万绿湖',
        收货方对接人: '李四',
        订单状态: '未出库',
        创建时间: '2021-03-01',
        出库位置: 'KS000-ZZR',
        创建人: '王吴',
        对接人联系方式: '12345678910',
      },{
        订单编号: 'X1234567890',
        订单名称: '蓝月亮深层洁净护理洗衣液',
        出库数量: '803',
        库存: '103',
        收货方地址: '广东市黄浦区云浦工业区浦区南路36号',
        收货方: '蓝月亮集团控股有限公司',
        订单状态: '已出库',
        收货方对接人: '王武',
        创建时间: '2021-03-10',
        出库位置: 'PQ030-ZZR',
        创建人: '王吴',
        对接人联系方式: '12345678910',
      },{
        订单编号: '',
        订单名称: '',
        供货方地址: '',
        订单状态: '',
        创建时间: '',
        出库位置: '',
        创建人: ''
      },{
        订单编号: '',
        订单名称: '',
        供货方地址: '',
        订单状态: '',
        创建时间: '',
        出库位置: '',
        创建人: ''
      },{
        订单编号: '',
        订单名称: '',
        供货方地址: '',
        订单状态: '',
        创建时间: '',
        出库位置: '',
        创建人: ''
      },{
        订单编号: '',
        订单名称: '',
        供货方地址: '',
        订单状态: '',
        创建时间: '',
        出库位置: '',
        创建人: ''
      },{
        订单编号: '',
        订单名称: '',
        供货方地址: '',
        订单状态: '',
        创建时间: '',
        出库位置: '',
        创建人: ''
      }, {
        订单编号: '',
        订单名称: '',
        供货方地址: '',
        订单状态: '',
        创建时间: '',
        出库位置: '',
        创建人: ''
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
