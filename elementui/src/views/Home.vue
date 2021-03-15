<template>
  <div>

  <el-row class="info">
    <el-col :span="3.8" :key="o" :offset="index> 0 ? 2 : 0"
        style="margin-left: 40px; margin-top: 20px;
        text-align: center;">
  <el-card :body-style="{ padding: '0px' }">
    <div style="padding: 30px;">
      <div style="margin-bottom: 20px;">
        <h style="font-family: 'Tahoma'; font-weight: bolder;
        font-size: 40px; color: #9C7546">264</h>
      </div>
      <i class="el-icon-takeaway-box" style="margin-right: 5px;"></i>
      <span>已用货架</span>
    </div>
  </el-card>
</el-col>

    <el-col :span="3.8" :key="o" :offset="index > 0 ? 2 : 0"
            style="margin-left: 20px; margin-top: 20px;
        text-align: center">
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 30px;">
          <div style="margin-bottom: 20px;">
            <h style="font-family: 'Tahoma'; font-weight: bolder;
        font-size: 40px; color: #F5A254">11</h>
          </div>
          <i class="el-icon-takeaway-box" style="margin-right: 5px;"></i>
          <span>剩余货架</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="3.8" :key="o" :offset="index > 0 ? 2 : 0"
            style="margin-left: 20px; margin-top: 20px;
        text-align: center">
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 30px;">
          <div style="margin-bottom: 20px;">
            <h style="font-family: 'Tahoma'; font-weight: bolder;
        font-size: 40px; color: #16A085">3942</h>
          </div>
          <i class="el-icon-takeaway-box" style="margin-right: 5px;"></i>
          <span>总库存量</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="3.8" :key="o" :offset="index > 0 ? 2 : 0"
            style="margin-left: 20px; margin-top: 20px;
        text-align: center">
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 30px;">
          <div style="margin-bottom: 20px;">
            <h style="font-family: 'Tahoma'; font-weight: bolder;
        font-size: 40px; color: #2874A6">20</h>
          </div>
          <i class="el-icon-takeaway-box" style="margin-right: 5px;"></i>
          <span>SKU数量</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="3.8" :key="o" :offset="index > 0 ? 2 : 0"
            style="margin-left: 20px; margin-top: 20px;
        text-align: center">
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 30px;">
          <div style="margin-bottom: 20px;">
            <h style="font-family: 'Tahoma'; font-weight: bolder;
        font-size: 40px; color:#943126">21</h>
          </div>
          <i class="el-icon-takeaway-box" style="margin-right: 5px;"></i>
          <span>入库订单总量</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="3.8" :key="o" :offset="index > 0 ? 2 : 0"
            style="margin-left: 20px; margin-top: 20px;
            text-align: center">
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 30px;">
          <div style="margin-bottom: 20px;">
            <h style="font-family: 'Tahoma'; font-weight: bolder;
        font-size: 40px; color: #797D7F">15</h>
          </div>
          <i class="el-icon-takeaway-box" style="margin-right: 5px;"></i>
          <span>出库订单总量</span>
        </div>
      </el-card>
    </el-col>
  </el-row>

  <el-row class="待办事项">
    <el-col :span="20" :key="o" :offset="index>0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }" style="margin-left: 40px;
        margin-top: 20px; width: 1060px; height: 500px">
        <div style="padding: 30px;">
          <i class="el-icon-document-copy" style="margin-right: 5px"></i>待办事项
        </div>
      </el-card>
    </el-col>
  </el-row>

  </div>
</template>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>