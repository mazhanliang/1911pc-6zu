<template>

  <div class="micronews micronews-login" >
    <my-header></my-header>

    <div class="micronews-login-container">
      <div class="form-box">
        <h3>登录</h3>
        <div class="wrap">
          <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" v-model="phone" id="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
              </div>
            </div>

            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="password" v-model="password"  id="password" placeholder="请输入密码"   autocomplete="off" class="layui-input">
              </div>
            </div>

            <div class="layui-form-item agreement">
              <div class="layui-input-block">
                <input type="checkbox" name="like1[write]" lay-filter="required" v-model="agree"
                       lay-skin="primary" title="我已阅读并同意" checked="" >
                <span class="txt"><a href="#">用户协议</a>和<a  href="#">隐私条款</a></span>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" @click="Login" lay-submit lay-filter="*" onclick="return">登录</button>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" type="button" @click="reg" lay-filter="*"  style="background-color:rgb(187 184 184)">去注册</button>
              </div>
            </div>
            <!-- 更多表单结构排版请移步文档左侧【页面元素-表单】一项阅览 -->
          </form>
          <div class="other-login">
            <a href="#">
              <img src="@/assets/res/static/images/load1.png">
            </a>
            <a href="#">
              <img src="@/assets/res/static/images/load2.png">
            </a>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
import MyHeader from '@/components/Index/Head'

import Common from '@/mixin/common.js'
export default {
  name: 'Login',
  data () {
    return {
      phone:'',
      password:''
    }
  },
mixins:[Common],
  components:{
    MyHeader:MyHeader,
  },
  methods: {
    reg:function(){
      this.$router.push({name:'Reg'});
    },
    Login: function () {

      if (this.phone == '') {
        this.alert('手机号不能为空');
        return false;
      }
      if (this.checkPhone(this.phone)) {
        this.msg('手机号格式不正确');
        return false;
      }
      if (this.password == '' || this.password.length < 6) {
        this.msg('密码长度最少6位');
        return false;
      }

      let api_data = {
        phone: this.phone,
        password: this.password,
        tt: 1
      }
      this.$http.post('/api/login', api_data).then(respnose => {
        if (respnose.body.status == 200) {

          this.$router.push({name:'Index'});
        } else {
          this.msg(respnose.data.msg)
        }
      }, error => {
        console.log(error);
      })
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
