<template>
<div>
  <div id="app" style="margin-bottom:50px">
    <router-view/>
  </div>
  <tabbar />
</div>
  
</template>
<script>
import tabbar from './components/tabbar'
export default {
  components:{
    tabbar
  },
  created(){
    console.log(process.env.NODE_ENV)
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
}
*{
  margin: 0;
  padding: 0;
}
</style>
