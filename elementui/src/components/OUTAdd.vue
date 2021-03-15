<template>
  <div>
    <p style="text-align: center; color: #606266; margin-bottom: 50px">新建出库订单</p>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="订单名称:" prop="订单名称" style="width:500px">
        <el-input v-model="ruleForm.订单名称"></el-input>
      </el-form-item>
      <el-form-item label="出库数量:" prop="出库数量" style="width:310px">
        <el-input v-model="ruleForm.出库数量"></el-input>
      </el-form-item>
      <el-form-item label="收货方:" prop="收货方" style="width:500px">
        <el-input v-model="ruleForm.收货方"></el-input>
      </el-form-item>
      <el-form-item label="收货方地址:" prop="收货方地址" style="width:500px">
        <el-input v-model="ruleForm.收货方地址"></el-input>
      </el-form-item>
      <el-form-item label="收货方对接人:" prop="收货方对接人" style="width:310px">
        <el-input v-model="ruleForm.收货方对接人"></el-input>
      </el-form-item>
      <el-form-item label="联系电话:" prop="联系电话" style="width:310px">
        <el-input v-model="ruleForm.联系电话"></el-input>
      </el-form-item>



<!--      <div style="display: grid; grid-template-columns: 3fr 2fr 3fr">-->
<!--        <el-form-item label="选择库区:" prop="选择库区" :inline="true">-->
<!--          <el-select v-model="ruleForm.选择库区" placeholder="选择库区">-->
<!--            <el-option label="一区仓库" value="一区仓库"></el-option>-->
<!--            <el-option label="二区仓库" value="二区仓库"></el-option>-->
<!--            <el-option label="三区仓库" value="三区仓库"></el-option>-->
<!--            <el-option label="四区仓库" value="四区仓库"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="出库位置编号:" prop="出库位置编号" style="width:500px; margin-left: 30px">-->
<!--          <el-input v-model="ruleForm.出库位置编号"></el-input>-->
<!--        </el-form-item>-->
<!--      </div>-->

      <el-form-item label="订单备注：" prop="订单备注">
        <el-input type="textarea" v-model="ruleForm.订单备注"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>




<script>
export default {
  data() {
    return {
      ruleForm: {
        收货方地址: '',
        订单备注: '',
        订单名称: '',
        订单编号: '',
        出库数量: '',
        收货方:'',
        收货方对接人: '',
        联系电话: '',
      },
      rules: {
        订单名称: [
          { required: true, message: '请添加需要出库的订单名称', trigger: 'blur' },
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        订单编号: [
          { required: true, message: '请输出订单编号', trigger: 'blur' },
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],

        出库数量: [
          { required: true, message: '请输入订单出库数量', trigger: 'blur' },
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],

        收货方: [
          { required: true, message: '请输入收货方公司名称', trigger: 'blur' }
        ],
        收货方地址: [
          { required: true, message: '请输入收货方地址', trigger: 'blur' }
        ],
        收货方对接人: [
          { required: true, message: '请输入收货方对接人', trigger: 'blur' }
        ],
        联系电话: [
          { required: true, message: '请输入收货方对接人联系电话', trigger: 'blur' }
        ],
        订单备注: [
          { required: false, message: '请输入收货方公司名称', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>