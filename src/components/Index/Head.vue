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
        <router-link :to="{name:'PersInfo'}">收藏</router-link>
       <!-- <a href="login.html"> -->
        <!-- <img src="@/assets/res/static/images/header.png" style="width: 36px; height: 36px;"> -->
       <!-- </a> -->
      </div>

    </div>
  </div>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods:{

  },
  mounred(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
