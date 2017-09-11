<template>
  <div class="activepPublic">
    <el-steps :space="200" :active="step" class="step">
      <el-step title="活动消息"></el-step>
      <el-step title="报名签到"></el-step>
      <el-step title="分享设置"></el-step>
      <el-step title="个性设置"></el-step>
    </el-steps>
    <transition name="fade">
      <router-view class="view"></router-view>
    </transition>
    <div class="but-group">
      <el-button>预览</el-button>
      <el-button>上一步</el-button>
      <el-button type="primary" @click.native.prevent="handleNextStep">下一步</el-button>
      <el-button type="primary">发布活动</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
    step: 1
    }
  },
  methods: {
    handleNextStep(){
      this.$router.push('/activePublic/step'+(this.step+1))
      //相当于nextT的作用
      var _this = this
      setTimeout(function(){
        if(true) {
          _this.step++
        }
      },0)
    }
  }
}
</script>
<style>
.activePublic .router-link{color:#fff;}
.activePublic .but-group .el-button{margin-right: 20px;}

</style>
