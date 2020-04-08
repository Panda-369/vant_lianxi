<template>
  <div>
    <Header :title="'主页'"/>
    <!-- <p class="animated bounceInDown" @click="gologin">这是主页</p>
    <p class="animated bounceInDown">{{country}}</p>-->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(item,index) in list" :key="index">
        <van-image width="170"  height="170" style="margin-top:20px;" lazy-load :src="item.goods.goods.images+'?x-oss-process=image/resize,s_250'" />
      </div>
    </van-list>
    <div class="goTop animated " :class="showgotop==true?'fadeInUpBig':'fadeOutDownBig'" v-show="showgotop" @click="goTops">
      goTop
    </div>
  </div>
</template>
<script>
import Header from '@/components/header'
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
import { getColumnGoodsPageList } from "../config/request";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      active: 0,
      page: 1,
      loading: false,
      finished: false,
      list: [],
      showgotop:false,
      scrollTop:'',
    };
  },
  components:{
    Header
  },
  created() {},
  computed: {
    ...mapState(["country"])
  },
  mounted(){
    window.addEventListener('scroll', this.windowScroll)
  },
  methods: {
    ...mapActions(["login"]),
    gologin() {
      this.login();
    },
    onLoad() {
      let params = {
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGF0dXMiOjEsImNoYW5uZWxJZCI6IjEwNDUiLCJ1c2VySWQiOiIxMDg4NDQzIiwic2Vzc2lvbklkIjoiYW1qazc3bW11YWJtMXFnMmt0a3BubnNrMXQifQ.ZtjRbrvsk7Os0l0uGxgLgc8GTi2dGUAFJC0TcddRAWQ",
        column_id: 42,
        page: this.page,
        limit: 10,
        channelId: "1045"
      };
      getColumnGoodsPageList(params).then(res => {
        this.loading = false;
        this.page += 1;
        let $res = res.data.data;
        console.log($res.goodsList);
        console.log($res.goodsList === null);
        
        if ($res.goodsList === null) {
          this.finished = true;
        }else{
            this.list.push(...$res.goodsList);
        }
      });
    },
     windowScroll(){
       let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
       this.scrollTop=scrollTop;
       if(scrollTop>0){
         this.showgotop=true;
       }else{
         this.showgotop=false;
       }
    },
    goTops(){
      $('body,html').animate({
        scrollTop: 0
      }, 300);
    }
  }
};
</script>
<style lang="scss">
p {
  font-size: 0.27rem;
}
.goTop{
  width: 1rem;
  height: 1rem;
  background: #eeeeee;
  position: fixed;
  right: 0.4rem;
  bottom: 2rem;
  font-size: 0.27rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 50%;
  color: #ffffff;
}
</style>