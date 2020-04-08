<!-- 主页面 -->
<template>
<div class='home'>
    <router-view></router-view>
    <tabbar />
</div>
</template>

<script>
import tabbar from '@/components/tabbar'
export default {
data() {
return {

};
},
components:{
    tabbar
},
methods: {

},
created() {

},
}
</script>
<style lang='scss' scoped>
    .home{
        margin-bottom: 50px;
    }
</style>