<template>
<div>
  <div id="app">
    <router-view/>
  </div>
  <tabbar />
</div>
  
</template>
<script>
import {mapMutations,mapState} from "vuex";
import tabbar from '@/components/tabbar'
export default {
  components:{
    tabbar
  },
  methods:{
    ...mapMutations(['INIT_SHOP_CART'])
  },
  computed:{
    ...mapState(['shopCart']),
  },
  created(){
    this.INIT_SHOP_CART()
    
  }

}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  padding-bottom: 50px;
}
*{
  margin: 0;
  padding: 0;
}
p{
     font-size: 0.27rem;
 }
</style>
