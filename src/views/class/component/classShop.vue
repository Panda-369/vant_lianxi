<!-- 
* @auth:Panda
* @Description:店铺列表
* @FilePath:src\views\class\component\classShop.vue
* @date:2020-07-24
-->
<template>
  <div class="classShop" >
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
      <div class="item" v-for="(item,index) in List" :key="index" v-show="List.length!=0">
        <van-image lazy-load :src="item.image" @click="goDeail(item)" />
        <p class="name">{{item.name}}</p>
        <p class="smallPrice">
          <span>抵后</span>
          <van-stepper
            v-model="item.CartNum"
            default-value="0"
            theme="round"
            min="0"
            button-size="22"
            disable-input
            @change="changeNumber(item)"
          />
        </p>
      </div>
    </van-list>
    <div class="cart" v-show="List.length!=0">
      <div class="left">
        <van-icon name="cart" @click="showPopup()" />
        <div class="num" v-show="cartnum>0">{{cartnum}}</div>
      </div>
      <div class="content">
        合计:
        <span style="color:#f42f38">￥30.50</span>
      </div>
      <div class="right">
        <van-button round type="info" color="#f42f38">立即下单</van-button>
      </div>
    </div>
    <van-popup v-model="popopshow" class="popup" position="bottom" :style="{ height: '30%' }">
      <p class="clear" @click="deleteCart()" >
        <van-icon name="delete" />清空购物车
      </p>
      <div class="content" v-for="(item,index) in cartList" :key="index">
        <div class="left">
          <van-image lazy-load :src="item.image" />
        </div>
        <div class="contents">
          <span class="money">￥5.2</span>
          <span class="all">
            <span class="di">抵后价</span>
            <span class="dimoney">￥3</span>
          </span>
        </div>
        <div class="right">
          <van-stepper
            v-model="item.CartNum"
            default-value="0"
            theme="round"
            min="0"
            button-size="22"
            disable-input
            @change="changeNumber(item)"
          />
        </div>
      </div>
    </van-popup>
    <loading  v-show="List.length==0"/>
    <!-- <transition name="router-slider" mode="out-in">
      <router-view @heavyLoad="heavyLoad" :clear="clear"></router-view>
    </transition> -->
  </div>
</template>

<script>
import Vue from "vue";
import bus from '@/config/utils'
import { Lazyload } from "vant";
Vue.use(Lazyload);
import axios from "axios";
import { mapMutations, mapState } from "vuex";
import { getNearStoreList } from "@/config/request";
import loading from '@/components/loading'
export default {
  data() {
    return {
      List: [],
      loading: false,
      finished: false,
      page: 1,
      value: "",
      popopshow: false,
      cartList: [],
    };
  },
  components:{
    loading
  },
  computed: {
    ...mapState(["shopCart"]),
    cartnum(){
      bus.$emit('LoadNUm') //更新购物车的徽标
      return this.cartList.length
    },
  },
  methods: {
    goDeail(item){//去详情页面
      this.$router.push({
        path:'/class/detail',
        query:item
      })
    },
    deleteCart(){//清空购物车
      this.DELETE_GOODS()
      this.cartList=[]
      this.List.forEach(element => {
        element.CartNum=0
      });
      this.popopshow=false
    },
    heavyLoad() {
      this.cartList = [];
      Object.keys(this.shopCart).forEach((element, index) => {
        this.List.forEach((element1, index1) => {
          if (element1.id == this.shopCart[element].id) {
            this.List[index1].CartNum = this.shopCart[element].CartNum;
            this.cartList.push(this.shopCart[element]);
          }
        });
      });
    },
    showPopup() {
      this.heavyLoad()
      this.popopshow = true;
    },
    changeNumber(value) {
      this.ADD_GOODS(value);
      this.heavyLoad()
    },
    ...mapMutations(["ADD_GOODS","DELETE_GOODS"]),
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
        if ($res.data.length != undefined) {
          this.List.push(...$res.data);
          this.page++;
          this.loading = false;
           this.heavyLoad()
        } else {
          this.finished = true;
        }
      });
    },
  },
  filters:{
      num(value){
          return JSON.stringify(value).length
      }
  },
  created() {},
};
</script>
<style lang='scss' scoped>
.classShop {
  padding-bottom: 1.5rem;
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
      .van-stepper {
        text-align: right;
        flex: 1;
        margin-top: 0.2rem;
        margin-right: 0.2rem;
      }
    }
  }
  .cart {
    z-index: 2500;
    width: 96%;
    height: 1rem;
    line-height: 1rem;
    background: #f5f5f5;
    margin-left: 2%;
    border-radius: 1rem;
    display: flex;
    position: fixed;
    bottom: 1.3rem;
    font-size: 0.27rem;
    .left {
        position: relative;
      .van-icon {
        font-size: 0.6rem;
        vertical-align: middle;
        color: #f42f38;
      }
      .num{
          position: absolute;
       position: absolute;
    top: .06rem;
    right: 0.6rem;
    width: .3rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    border-radius: 100%;
    font-size: .22rem;
    font-weight: 700;
    color: #fff;
    background: #ff5657;
      }
    }
    .left,
    .right {
      width: 2rem;
    }
    .content {
      flex: 1;
      font-size: 0.32rem;
    }
  }
  .popup {
    .clear {
      line-height: 0.7rem;
      text-align: right;
      margin-right: 0.2rem;
      .van-icon {
        vertical-align: text-top;
        margin-right: 0.1rem;
      }
    }
    .content {
      display: flex;
      padding: 0.1rem 0.2rem;
      .left {
        width: 1rem;
      }
      .contents {
        flex: 1;
        font-size: 0.27rem;
        margin-top: 0.3rem;
        .money {
          color: #ff5657;
          font-weight: bold;
          margin-right: 0.2rem;
        }
        .all {
          border: 1px solid red;
          .di {
            display: inline-block;
            text-align: center;
            color: #fff;
            background: linear-gradient(270deg, #f42f38, #fe8166);
            border-radius: 0.064rem 0 0 0.064rem;
            padding: 0.05rem;
          }
          .dimoney {
            position: relative;
            left: -5px;
            display: inline-block;
            color: #fb4b41;
            padding: 0 0.032rem 0 0.096rem;
            font-weight: 700;
          }
        }
      }
      .right {
        width: 2rem;
        margin-top: 0.3rem;
      }
    }
  }
}
.van-popup {
  padding-bottom: 2.3rem;
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