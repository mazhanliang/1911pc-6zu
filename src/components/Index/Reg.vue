<template>
  <div class="micronews micronews-login" >
    <div class="micronews-login-container">
      <div class="form-box">
        <h3>注册账号</h3>
        <div class="wrap">
          <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name=""
                       lay-verify="required|phone" id="phone" placeholder="请输入手机号"
                       autocomplete="off" v-model="phone" class="layui-input"  >
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required" id="password" v-model="user_img_code"
                       placeholder="请输入图片验证码" autocomplete="off" class="layui-input">
                <img :src="img_code" @click="changeImgCode()"/>
              </div>
            </div>

            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name=""  lay-verify="required" v-model="msg_code"
                       placeholder="请输入你收到的验证码" autocomplete="off"  class="layui-input" >
                <input type="button"  id="veriCodeBtn" name=""  @click="getMsgCode"
                       :value="TimeCode"
                       v-if="sendMark"
                       class="obtain layui-btn">
                <input type="button"   name=""
                       :value="TimeCode"
                       v-else="sendMark"
                       class="obtain layui-btn">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required" id="imgCode2" v-model="psd"
                        placeholder="请输入你的密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required" id="imgCode1" v-model="repsd" placeholder="请确认你的密码" autocomplete="off" class="layui-input">
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
                <button class="layui-btn" type="button" @click="reg" lay-filter="*" >注册</button>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" @click="gotoLogin()" style="background-color:rgb(187 184 184)"
                      lay-filter="*" onclick="return false">去登陆</button>
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
  import "@/assets/res/layui/css/layui.css"
  import "@/assets/res/static/css/main.css"
  import Common from '@/mixin/common.js'

  export default {
    name: "Reg",
    data () {
      return {
          img_code: '',
          phone:'',
          user_img_code:'',
          TimeCode:'验证码',
          msg_code:'',
          sendMark:1,
          //checkPhone:'',
           psd:'',
           repsd:'',
           agree:[ 2 ],
        // msg_send_mark:0
           }
         },
    mixins:[Common],
         methods:{
           gotoLogin:function(){
             this.$router.push({name:'Login'});
           },
           changeImgCode:function() {
             this.img_code = this.img_code + '&rand=' +Math.random();
                },
                 countDown:function(){
                   this.sendMark = 0;
                   this.TimeCode = 59;
                   let _this = this;
                   let int_val = setInterval(function (){
                     _this.TimeCode--;
                     if(_this.TimeCode < 1){
                       _this.TimeCode = '验证码';
                       _this.sendMark = 1;
                       clearInterval(int_val)
                    }
                   },1000)
                 },
                 getMsgCode:function() {
                    if( this.phone == '') {
                      this.alert('请输入你的手机号');
                     return false;
                   }
                   if (this.checkPhone(this.phone)) {
                     this.alert('手机号格式不正确');
                     return false;
                   }
                  if( this.user_img_code == ''){
                    this.alert('请输入图片验证码');
                    return false;
                  }
                 let api_req = {
                    sid:this.sid,
                    user_img_code:this.user_img_code,
                    phone:this.phone,
                    checkphone:this.checkphone,
                    type:1
                 }

                  //调用短信发送接口
                  this.$http.post('/api/sendMsgCode',api_req).then(success=> {
                    if( success.body.status != 200) {
                      this.alert( success.body.msg );
                     }else{
                       this.changeImgCode();
                       this.countDown();
                    //   this.msg_send_mark = 1;
                   }
                },error=>{
                    this.msg('短信发送失败，请重试');
                    return false;
                  });
              },
              reg:function () {
                     // layui.form.on('checkbox(agree)',function(data){
                     //   console.log(data.elem);
                     //   console.log(data.elem.checked);
                     //   console.log(data.value);
                     //   console.log(data.othis);
                     // });
                     // return false;
                   if( this.phone == '') {
                     this.alert('请输入你的手机号');
                        return false;
                     }
                  // if( this.checkPhone( this.phone)){
                  //   this.msg('手机号格式不正确');
                  //   return false;
                  // }
                  // if( this.msg_send_mark != 1){
                  //   this.msg('请先获取短信验证码');
                  //   return false;
                  // }
                  if( this.msg_code == ''){
                    this.alert('短信验证码不能为空');
                    return false;
                  }
                  if( this.psd == ''){
                    this.alert('密码不能为空');
                    return false;
                  }
                  if( this.psd.length < 6){
                    this.alert('密码不能少于6位');
                    return false;
                  }
                  if( this.psd != this.repsd){
                    this.alert('俩次密码不一致');
                    return false;
                  }
                  let api_req = {
                    phone:this.phone,
                    password:this.psd,
                    msg_code:this.msg_code,
                    tt:1
                  }
                  this.$http.post('/api/reg',api_req).then(success=> {
                    if (success.body.status == 200) {
                      this.alert('注册成功,去登陆');
                      this.$router.push({name:'Login'})
                  }else{
                      alert( success.body.msg);
                      return false;
                    }
                  },error=>{
                    this.alert('注册失败,请重试');
                    return false;
                  })
                }
              },
             mounted()
             {
                this.$http.post('/api/getImgUrl').then(success=>{
                  this.img_code = success.body.data.url;
                  this.sid = success.body.data.sid;
                },error=>{
                  this.alert('请求失败，请重试');
                })
             }
           }
</script>

<style scoped>

</style>
