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
                <input type="text" v-model="user_tel" lay-verify="required|phone" id="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  v-model="user_code" lay-verify="required" id="imgCode" placeholder="验证码" autocomplete="off" class="layui-input">
                <img src="https://fly.layui.com/auth/imagecode?t=1542856673772">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  v-model="note_code" lay-verify="required" placeholder="请输入短信验证码" autocomplete="off" class="layui-input">
                <input type="button"  id="veriCodeBtn" name="" value="验证码" class="obtain layui-btn">
              </div>
            </div>
            <div class="layui-form-item agreement">
              <div class="layui-input-block">
                <input type="checkbox" name="like1[write]" lay-verify="required" lay-skin="primary" title="我已阅读并同意" checked="">
                <span class="txt"><a href="#">用户协议</a>和<a  href="#">隐私条款</a></span>

              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">

                <button class="layui-btn" @click="Login" lay-submit lay-filter="*" onclick="return false">登录</button>
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

export default {
  name: 'Login',
  data () {
    return {
      user_tel:'',
      user_code:'',
      note_code:''
    }
  },
  components:{
    MyHeader:MyHeader,
  },
  methods: {
    Login: function () {
      if (this.user_tel == '') {
        alert('手机号称不能为空');
        return false;
      }
      if (this.user_code == '') {
        alert('验证码不能为空');
        return false;
      }
      if (this.note_code == '') {
        alert('短信验证码不能为空');
        return false;
      }
      this.$http.post('/api/login', {
        user_tel: this.user_tel,
        user_code: this.user_code,
        note_code: thia.note_code,

      }).then(respnose => {
        if (respnose.body.status == 200) {
          sessionStorage.setItem('id', respnose.body.data.id);
          sessionStorage.setItem('token', respnose.body.data.token);
          this.$router.push({name: 'Index'});
        } else {
          alert(respnose.data.msg)
        }
        console.log('success');
        console.log(respnose);
      }, error => {
        console.log(error);
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
