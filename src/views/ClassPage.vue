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
            name:'给儿童的写作课',
            price:9.9,
            totalClass:15,
            views:2214,
            updateClass:4,
            originalPrice:49
          },
          {
            img:require('@/assets/2.png'),
            name:'让阅读点亮孩子的智慧人生',
            price:39.9,
            totalClass:8,
            views:898,
            updateClass:4,
            originalPrice:69
          },
          {
            img:require('@/assets/3.png'),
            name:'唐诗解读课',
            price:9.9,
            totalClass:12,
            views:2754,
            updateClass:8,
            originalPrice:49
          },
          {
            img:require('@/assets/4.png'),
            name:'汉字里的智慧人生',
            price:29.9,
            totalClass:17,
            views:1655,
            updateClass:17,
            originalPrice:99
          },
          {
            img:require('@/assets/5.png'),
            name:'儿童的注意力十大技法',
            price:19.9,
            totalClass:11,
            views:754,
            updateClass:11,
            originalPrice:49
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
