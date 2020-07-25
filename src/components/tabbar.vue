<!-- 
* @auth:Panda
* @Description:底部导航组件
* @FilePath:src/components/tabbar.vue
* @date:2020-07-23
-->
<template>
<div class='tabbar'>
    <van-tabbar v-model="active" >
        <van-tabbar-item icon="home-o" to="/index" :replace="true">主页</van-tabbar-item>
        <van-tabbar-item icon="bars" to="/class" :replace="true">分类</van-tabbar-item>
        <van-tabbar-item icon="cart" to="/shopCart" :badge="num" :replace="true" v-if="num>0">购物车</van-tabbar-item>
        <van-tabbar-item icon="cart" to="/shopCart"  :replace="true" v-else>购物车</van-tabbar-item>
        <van-tabbar-item icon="manager" to="/mine" :replace="true">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
import bus from '@/config/utils'
import { mapState } from 'vuex';
export default {
data() {
return {
    active:0,
    num:''
};
},
methods: {

},
created() {
    this.num=Object.keys(this.shopCart).length
},
mounted() {
     bus.$on('LoadNUm',res=>{
         this.num=Object.keys(this.shopCart).length
    })
},
computed: {
     ...mapState(["shopCart"]),
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
   
 }
</style>