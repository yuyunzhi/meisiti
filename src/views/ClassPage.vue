<template>
<div class="class-page">
  <div class="class-item" v-for="(item,index) in classList" :key="index+'cc'">
    <ClassItem :item="item" :color="'#d96445'"></ClassItem>
  </div>
</div>
</template>

<script>
  export default {
    name: 'ClassPage',
    components:{
      ClassItem:()=>import('@/components/ClassItem')
    },
    data(){
      return{
        classList:[
          {
            img:require('@/assets/1.png'),
            name:'儿童财富启蒙课',
            price:9.9,
            totalClass:6,
            views:2214,
            updateClass:4,
            originalPrice:39.9
          },
          {
            img:require('@/assets/1.png'),
            name:'妈妈财商课',
            price:39.9,
            totalClass:6,
            views:898,
            updateClass:4,
            originalPrice:99
          },
          {
            img:require('@/assets/1.png'),
            name:'儿童财富启蒙课',
            price:'9.9',
            totalClass:6,
            views:1754,
            updateClass:4,
            originalPrice:399
          },
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
.class-page{
  padding-top:20px;
  width:375px;
  height:100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  .class-item{
    width:350px;
    margin:0 auto;
  }
}
</style>
