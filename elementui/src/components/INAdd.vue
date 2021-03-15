<template>
  <div>
    <p style="text-align: center; color: #606266; margin-bottom: 50px">新建入库订单</p>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
<el-form-item label="订单名称:" prop="订单名称" style="width:500px">
  <el-input v-model="ruleForm.订单名称"></el-input>
</el-form-item>
      <el-form-item label="选择商品类别:" prop="选择商品类别" :inline="true">
        <el-select v-model="ruleForm.选择商品类别" placeholder="选择商品类别">
          <el-option label="糖果制品（含巧克力）" value="糖果制品"></el-option>
          <el-option label="薯类和膨化食品" value="薯类和膨化食品"></el-option>
          <el-option label="饼干" value="饼干"></el-option>
          <el-option label="罐头" value="罐头"></el-option>
          <el-option label="乳制品" value="乳制品"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="尺寸:" prop="尺寸" style="width:310px">
        <el-input v-model="ruleForm.尺寸"></el-input>
      </el-form-item>
      <el-form-item label="口味:" prop="口味" style="width:310px">
        <el-input v-model="ruleForm.口味"></el-input>
      </el-form-item>
      <el-form-item label="过期时间:" prop="过期时间" style="width:310px">
        <el-input v-model="ruleForm.过期时间"></el-input>
      </el-form-item>

      <el-form-item label="入库数量:" prop="入库数量" style="width:310px">
        <el-input v-model="ruleForm.入库数量"></el-input>
      </el-form-item>
      <el-form-item label="供货方:" prop="供货方" style="width:500px">
        <el-input v-model="ruleForm.供货方"></el-input>
      </el-form-item>
      <el-form-item label="供货方地址:" prop="供货方地址" style="width:500px">
        <el-input v-model="ruleForm.供货方地址"></el-input>
      </el-form-item>
      <el-form-item label="供货方对接人:" prop="供货方对接人" style="width:310px">
        <el-input v-model="ruleForm.供货方对接人"></el-input>
      </el-form-item>
      <el-form-item label="联系电话:" prop="联系电话" style="width:310px">
        <el-input v-model="ruleForm.联系电话"></el-input>
      </el-form-item>

<!--  <div style="display: grid; grid-template-columns: 3fr 2fr 3fr">-->
<!--      <el-form-item label="选择库区:" prop="选择库区" :inline="true">-->
<!--    <el-select v-model="ruleForm.选择库区" placeholder="选择库区">-->
<!--      <el-option label="一区仓库" value="一区仓库"></el-option>-->
<!--      <el-option label="二区仓库" value="二区仓库"></el-option>-->
<!--      <el-option label="三区仓库" value="三区仓库"></el-option>-->
<!--      <el-option label="四区仓库" value="四区仓库"></el-option>-->
<!--    </el-select>-->
<!--      </el-form-item>-->
<!--  <el-form-item label="入库位置编号:" prop="入库位置编号" style="width:500px; margin-left: 30px">-->
<!--      <el-input v-model="ruleForm.入库位置编号"></el-input>-->
<!--  </el-form-item>-->
<!--    </div>-->


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
        供货方地址: '',
        订单备注: '',
        订单名称: '',
        订单编号: '',
        入库数量: '',
        供货方:'',
        库区:'',
        选择商品类别:'',
        入库位置编号: '',
        供货方对接人: '',
        联系电话: '',
        种类: '',
        过期时间: '',
        尺寸: '',
        口味: '',
      },
      rules: {
        订单名称: [
          { required: true, message: '请添加需要入库的订单名称', trigger: 'blur' },
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        订单编号: [
          { required: true, message: '请输入订单编号', trigger: 'blur' },
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        入库位置编号: [
          { required: true, message: '请输入入库位置编号', trigger: 'blur' },
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        入库数量: [
          { required: true, message: '请输入订单入库数量', trigger: 'blur' },
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        供货方: [
          { required: true, message: '请输入供货方公司名称', trigger: 'blur' }
        ],
        供货方地址: [
          { required: true, message: '请输入供货方地址', trigger: 'blur' }
        ],
        供货方对接人: [
          { required: true, message: '请输入供货方对接人姓名', trigger: 'blur' }
        ],
        联系电话: [
          { required: true, message: '请输入对接人联系电话', trigger: 'blur' }
        ],
        订单备注: [
          { required: false, message: '', trigger: 'blur' }
        ],
        尺寸: [
          { required: true, message: '请输入货品尺寸', trigger: 'blur' }
        ],
        口味: [
          { required: true, message: '请输入货品口味', trigger: 'blur' }
        ],
        过期时间: [
          { required: true, message: '请输入过期时间', trigger: 'blur' }
        ],
        选择商品类别: [
          { required: true, message: '请选择商品类别', trigger: 'change' }
        ],
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
    },
  }
}
</script>