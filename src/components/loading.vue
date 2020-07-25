<!-- 
* @auth:Panda
* @Description:加载页面
* @FilePath:src\components\loading.vue
* @date:2020-07-24
-->
<template>
<div class='loading'>
    <img src="@/assets/loadGif2.gif" alt="">
</div>
</template>

<script>
export default {
data() {
return {

};
},
methods: {

},
created() {

},
}
</script>
<style lang='scss' scoped>
 .loading{
     width: 100%;
     position: fixed;
     top: 0;
     background: #ffffff;   
     img{
         width: 100%;
         margin-top: 40%;
     }
 }
</style>