<!-- 子页面 -->
<template>
<div class='son'>
    <Header :title="'子页面'" />
</div>
</template>

<script>
import Header from '@/components/header'
export default {
data() {
return {

};
},
components:{
    Header
},
methods: {

},
created() {
    console.log(this.$route.params.id)
},
}
</script>
<style lang='scss' scoped>

</style>