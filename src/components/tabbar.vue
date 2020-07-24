<!-- 
* @auth:Panda
* @Description:底部导航组件
* @FilePath:src/components/tabbar.vue
* @date:2020-07-23
-->
<template>
<div class=''>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/index">主页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/class">分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/shopCart">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
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
}
</script>
<style lang='scss' scoped>

</style>