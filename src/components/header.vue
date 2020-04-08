<!--  -->
<template>
<div style="height:1rem;">
<div class='header'>
  <div class="left" @click="onClickLeft">
      <van-icon name="arrow-left" />
  </div>
  <div class="content">{{title}}</div>
</div>
</div>
</template>

<script>
export default {
data() {
return {

};
},
props:{
    title:String
},
methods: {
onClickLeft(){
    this.$router.go(-1);
}
},
created() {

},
}
</script>
<style lang='scss' scoped>
    .header{
        height: 1rem;
        line-height: 1rem;
        font-size: 0.3rem;
        text-align: center;
        position: fixed;
        background: #ffffff;
        width: 100%;
        color: #999;
        z-index:100;
        .left{
            position: absolute;
            left: 0.2rem;
        }
        .content{
            color: #000;
        }
    }
</style>