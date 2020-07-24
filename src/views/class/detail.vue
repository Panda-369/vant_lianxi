<!-- 
* @auth:Panda
* @Description:店铺详情
* @FilePath:src\views\class\detail.vue
* @date:2020-07-24
-->
<template>
  <div class="classShop">
    <!-- 返回 -->
    <van-nav-bar title="店铺详情" left-arrow @click-left="onClickLeft" />
     <div class="detail" v-for="(item,index) in List" :key="index">
        <img :src="item.img" alt="" >
        <p>{{item.name}}</p>
          <van-stepper v-model="item.value" theme="round" min="0" button-size="22" disable-input @change="changeNumber(item)" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
          List:[{
        id:1001,
        img:'https://img.fphdcdn.com/member/2020-07-202rYNCCKKjP.jpg?x-oss-process=image/resize,s_300',
        name:'西瓜',
        value:''
    },{
        id:1002,
        img:'https://img.fphdcdn.com/member/2020-07-206QXNrffYaR.jpg?x-oss-process=image/resize,s_350',
        name:'德芙',
        value:''
    }]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    changeNumber(item){
        console.log(item)
    }
  },
  created() {
      
  },
};
</script>
<style lang='scss' scoped>
.classShop {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  .detail{
     width: 48%;
     margin-left: 2%;
     float: left;
     img{
         width: 100%;
     }
 }
}
</style>