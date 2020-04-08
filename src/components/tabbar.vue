<!--  -->
<template>
<div class=''>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/index">主页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/login">登录</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
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