<template>
  <div class="micronews">
  <div class="micronews-header-wrap">
    <div class="micronews-header w1000 layui-clear">
      <h1 class="logo">
        <a href="index.html">
          <img src="@/assets/res/static/images/LOGO.png" alt="logo">
          <span class="layui-hide">LOGO</span>
        </a>
      </h1>
      <p class="nav">
        <router-link :to="{name:'Index'}" class="active">最新</router-link>

        <router-link :to="{name:'List'}">娱乐</router-link>
        <router-link :to="{name:'List'}">生活</router-link>
        <router-link :to="{name:'List'}">财经</router-link>
        <router-link :to="{name:'List'}">科技</router-link>
        <router-link :to="{name:'List'}">军事</router-link>

      </p>
      <div class="search-bar">
        <form class="layui-form" action="">
          <div class="layui-form-item">
            <div class="layui-input-block">
              <input type="text" name="title" placeholder="搜索你要的内容" autocomplete="off" class="layui-input">
              <button class="layui-btn search-btn"  formnovalidate><i class="layui-icon layui-icon-search"></i></button>
            </div>
          </div>
        </form>
      </div>
      <div class="login">
        <router-link :to="{name:'Login'}">登录</router-link>

       <!-- <a href="login.html"> -->
        <!-- <img src="@/assets/res/static/images/header.png" style="width: 36px; height: 36px;"> -->
       <!-- </a> -->
      </div>
      <div class="menu-icon">
        <i class="layui-icon layui-icon-more-vertical"></i>
      </div>
      <div class="mobile-nav">
        <ul class="layui-nav" lay-filter="">
          <li class="layui-nav-item layui-this"><a href="index.html">最新</a></li>
          <li class="layui-nav-item"><a href="list.html">娱乐</a></li>
          <li class="layui-nav-item"><a href="list.html">生活</a></li>
          <li class="layui-nav-item"><a href="list.html">财经</a></li>
          <li class="layui-nav-item"><a href="list.html">科技</a></li>
          <li class="layui-nav-item"><a href="list.html">军事</a></li>
        </ul>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
  import "@/assets/res/layui/css/layui.css"
  import "@/assets/res/static/css/main.css"
  import "@/assets/res/layui/layui.js"
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods:{

  },
  mounred(){
    layui.config({
      base: '@/assets/res/static/js/'
    }).use('index',function(){
      var index = layui.index;
      index.banner()
      index.seachBtn()
      index.arrowutil()
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
