<!-- 
* @auth:Panda
* @Description:店铺列表
* @FilePath:src\views\class\component\classShop.vue
* @date:2020-07-24
-->
<template>
  <div class="classShop">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="item" v-for="(item,index) in List" :key="index">
        <van-image lazy-load :src="item.image" />
        <p class="name">{{item.name}}</p>
        <p class="smallPrice">
          <span>抵后</span>
           <van-stepper v-model="item.CartNum" default-value="0" theme="round" min="0" button-size="22" disable-input @change="changeNumber(item)" />
        </p>
      </div>
    </van-list>
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);
import axios from "axios";
import { mapMutations, mapState } from "vuex";
import { getNearStoreList } from "@/config/request";
export default {
  data() {
    return {
      List: [],
      loading: false,
      finished: false,
      page: 1,
      value:''
    };
  },
  computed: {
    ...mapState(["shopCart"]),
  },
  methods: {
    changeNumber(value){
        this.ADD_GOODS(value);
    },
    ...mapMutations(["ADD_GOODS"]),
    goDetail() {
      //去详情页面
      this.$router.push({
        path: "/class/detail",
      });
    },
    onLoad() {
      let params = {
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGF0dXMiOjEsImNoYW5uZWxJZCI6IjEwNDUiLCJ1c2VySWQiOiIxMDg4NDQzIiwic2Vzc2lvbklkIjoiZ21ncTgwaWZscG1xaWo2YWFlOTE5b2Nham8ifQ.q7tblUdj4rnsCYbf9-AbCAwf8PS66N_cu-7mxo_cohE",
        storeId: "244",
        page: this.page,
        pageSize: 20,
        classifyId: 435,
        classifyTypeId: 3,
        channelId: 1045,
      };
      getNearStoreList(params).then((res) => {
        let $res = res.data;
        if($res.data.length!=undefined){
            this.List.push(...$res.data);
            this.page++
            this.loading=false
            this.List.forEach(element => {
               element.CartNum=0
            });
        }else{
            this.finished = true;
        }
      });
    },
  },
  created() {
    console.log(this.shopCart);
  },
};
</script>
<style lang='scss' scoped>
.item {
  width: 47%;
  float: left;
  margin-left: 2%;
  .van-image {
    height: 3.5rem;
  }
  .name {
    font-weight: bolder;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #333;
  }
  .smallPrice {
      display: flex;
      margin: 0.1rem 0;
    span {
      display: block;
      box-sizing: border-box;
      background: linear-gradient(270deg, #f42f38, #fe8166);
      color: #ffefd5;
      padding: 0 0.1rem;
      border-radius: 0.08rem;
      width: 1rem;
      margin: 0.2rem;
    }
    .van-stepper{
     text-align: right;
    flex: 1;
    margin-top: 0.2rem;
    margin-right: 0.2rem;
    }
  }
}

/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.4s;
}

.router-slider-enter,
.router-slider-leave-active {
  transform: translateX(500px);
}
</style>