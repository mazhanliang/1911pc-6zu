<template>

  <div class="micronews">
    <my-header></my-header>

  <div class="layui-fulid micronews-banner w1000">
    <div class="layui-carousel imgbox" id="micronews-carouse">
      <div carousel-item>
        <div>
          <p class="title">去南非旅行需要做什么准备</p>
          <a href="list.html"><img src="@/assets/res/static/images/news_img1.jpg"></a>
        </div>
        <div>
          <p class="title">去南非旅行需要做什么准备</p>
          <a href="list.html"><img src="@/assets/res/static/images/news_img1.jpg"></a>
        </div>
      </div>
    </div>
  </div>
  <div class="micronews-container w1000">
    <div class="layui-fluid">
      <div class="layui-row">
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md8">
          <div class="main">
            <div class="list-item" id="LAY_demo2">
              <div v-for="(v,k) in news_list">
              <div class="item">
                <router-link :to="{name:'Details',query:{news_id:v.news_id}}">
                <img :src="v.news_image" style="width: 200px">
                <div class="item-info">
                  <h4><a href="details.html">{{v.news_title}}</a></h4>
                  <div class="b-txt">
                    <span class="label">{{v.cate_name}}</span>
                    <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      {{v.browse_count}}条
                    </span>
                    <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                  </div>
                </div>
                </router-link>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md4">
          <div class="popular-info">
            <div class="layui-card">
              <div class="layui-card-header">
                <h3>热门资讯</h3>
              </div>
              <div class="layui-card-body">
                <ul class="list-box">
                  <div v-for="(vv,kk) in news_remai">
                  <li class="list">
                    <router-link :to="{name:'Details',query:{news_id:vv.news_id}}">
                      <span>{{vv.news_title}}</span>

                      <template v-if="vv.aaa<=3"><i   class="heat-icon"></i></template>
                    </router-link>
                  </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <my-footer></my-footer>
  </div>
</template>

<script>
  import "@/assets/res/layui/css/layui.css"
  import "@/assets/res/static/css/main.css"

  import MyHeader from '@/components/Index/Head'
  import MyFooter  from '@/components/Index/Tail'

  import Common from '@/mixin/common.js'
export default {
  name: 'Index',
  data () {
    return {
        news_list:[],
        news_remai:[],
        page:2,
        news_id:'3',
    }
  },
  mixins:[Common],
  components:{
    MyHeader:MyHeader,
    MyFooter:MyFooter
  },
  methods: {
    news_list:function () {
      this.$http.post('api/newslist').then( (response) =>{
        if( response.body.status == 200 ){
          this.news_list =this.news_list.concat(response.body.data);
        }
      },(error) => {
        alert(error);
      })
    },
    news_remai:function (){
      this.$http.post('api/remai').then( (response) =>{
        if( response.body.status == 200 ){
          console.log(response)
          this.news_remai =this.news_remai.concat(response.body.data);
        }
      },(error) => {
        alert(error);
      })
    }
  },

  mounted(){
    layui.use('index',function(){
      var index = layui.index;
      index.banner()
      index.seachBtn()
      index.arrowutil()
    });

    this.$http.post('api/newslist').then( (response) =>{
      if( response.body.status == 200 ){
        console.log(response)
        this.news_list =this.news_list.concat(response.body.data);
      }
    },(error) => {
      alert(error);
    }),
      this.$http.post('api/remai').then( (response) =>{
        if( response.body.status == 200 ){
          console.log(response)
          this.news_remai =this.news_remai.concat(response.body.data);
        }
      },(error) => {
        alert(error);
      })
  },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
