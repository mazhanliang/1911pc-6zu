export default {
  methods:{
    alert:function ( msg ){
      alert(msg);
      return false;
    },
    msg:function ( msg ){
      alert(msg);
      return false;
    },
    // checkPhone:function ( phone ){
    //     var reg =/^1{1}\d{10}$/;
    //     if( !reg.test( phone )) {
    //       return false;
    //     }else{
    //       return true;
    //   }
    // }
  }
}
