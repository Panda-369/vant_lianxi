<!-- 
* @auth:Panda
* @Description:店铺详情
* @FilePath:src\views\class\detail.vue
* @date:2020-07-24
-->
<template>
  <div class="classShop">
    <!-- 返回 -->
    <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft" />
    <van-image lazy-load :src="list.image" />
    <p class="name">{{list.name}}</p>
    <p class="smallPrice">
      <span>抵后</span>
      <van-stepper
        v-model="list.CartNum"
        default-value="0"
        theme="round"
        min="0"
        button-size="22"
        disable-input
        @change="changeNumber(list)"
      />
    </p>
    <div class="cart">
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
      <p class="clear" @click="deleteCart()">
        <van-icon name="delete" />清空购物车
      </p>
      <van-empty image="error" description="购物车为空哦,快去添加吧!" v-if="cartList.length==0" />
      <div class="content" v-for="(item,index) in cartList" :key="index" v-else>
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
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      list: [],
      cartList: [],
      popopshow: false,
    };
  },
  methods: {
    deleteCart(){
       this.DELETE_GOODS()
      this.cartList=[]
      this.list.CartNum=0
      this.popopshow=false
    },
    showPopup() {
      this.popopshow = true;
    },
    ...mapMutations(["ADD_GOODS", "DELETE_GOODS"]),
    onClickLeft() {
      this.$router.go(-1);
    },
    changeNumber(item) {
      this.ADD_GOODS(item);
      this.heavyLoad();
    },
    heavyLoad() {
      this.cartList = [];
      console.log(Object.keys(this.shopCart))
      Object.keys(this.shopCart).forEach((element, index) => {
        this.cartList.push(this.shopCart[element]);
        if (element == this.list.id) {
          console.log(this.shopCart[element].CartNum)
          this.list.CartNum = this.shopCart[element].CartNum;
        }
      });
    },
  },
  computed: {
    ...mapState(["shopCart"]),
    cartnum() {
      return this.cartList.length;
    },
  },
  created() {
    this.list = this.$route.query;
    this.heavyLoad();
  },
};
</script>
<style lang='scss' scoped>
.van-popup {
  padding-bottom: 2.3rem;
}
.classShop {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 999;
  .detail {
    width: 48%;
    margin-left: 2%;
    float: left;
    img {
      width: 100%;
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
    bottom: 0.5rem;
    font-size: 0.27rem;
    .left {
      position: relative;
      .van-icon {
        font-size: 0.6rem;
        vertical-align: middle;
        color: #f42f38;
      }
      .num {
        position: absolute;
        position: absolute;
        top: 0.06rem;
        right: 0.6rem;
        width: 0.3rem;
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        border-radius: 100%;
        font-size: 0.22rem;
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
</style>