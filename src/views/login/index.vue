<template>
  <div class="login-container">
    <el-form class="login-form" ref="form" :model="user">
      <el-form-item>
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked"
          >我已阅读并同意用户协议和隐私条款</el-checkbox
        >
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: "", //手机号
        code: "", //验证码
      },
      checked: false,
    };
  },
  methods: {
    onLogin() {
      //获取表单数据（表单接口）
      const user = this.user;
      //表单验证

      //验证通过，提示登录
      request({
        methods: "POST",
        url: "/mp/v1_0/authorizations",
        data: user,
      })
        .then((res) => {
          console.log(res);
          this.$message({
            message: "恭喜你，这是一条成功消息",
            type: "success",
          });
        })
        .catch((err) => {
          console.log("登录失败");
          this.$message.err("登录失败");
        });
      //处理后端响应结果
      // 成功 xxx
    },

    //失败 xxxx
  },
  computed: {},
  watch: {},
};
</script>
<style  scoped lang="less">
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("./login-bc.jpg") no-repeat;
  background-size: cover;
  .login-form {
    background-color: #ffffff;
    padding: 50px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>