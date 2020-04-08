<template>
<div>
  <div id="app">
    <router-view/>
  </div>
</div>
  
</template>
<script>
export default {
  components:{
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
