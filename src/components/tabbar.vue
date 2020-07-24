<!-- 
* @auth:Panda
* @Description:底部导航组件
* @FilePath:src/components/tabbar.vue
* @date:2020-07-23
-->
<template>
<div class='tabbar'>
    <van-tabbar v-model="active" >
        <van-tabbar-item icon="home-o" to="/index">主页</van-tabbar-item>
        <van-tabbar-item icon="bars" to="/class">分类</van-tabbar-item>
        <van-tabbar-item icon="cart" to="/shopCart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {
data() {
return {
    active:0
};
},
methods: {

},
created() {
 
},
watch: {
    $route(to,from){
          switch (to.path) {
        case '/index':
            this.active=0
            break;
        case '/class':
            this.active=1
            break;
        case '/shopCart':
            this.active=2
            break;
        case '/mine':
            this.active=3
            break;
        default:
            break;
    }
    }
},
}
</script>
<style lang='scss' scoped>
 .tabbar{
     .van-tabbar{
  z-index: 2200;
     }
   
 }
</style>