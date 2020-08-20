export default {
  methods:{
    checkPhone:function (phone) {
      var reg=/^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if(reg.test(phone)){
        return false;
      }else{
        return true;
      }
    },
    alert:function(msg){
      layui.layer.alert(msg);
      return false;
    },
    msg:function (msg) {
        layui.layer.open({
          type:0,
          content:msg,
          shade:[0.5,'#393D49']
        });
        return false;
    },



  }

}
