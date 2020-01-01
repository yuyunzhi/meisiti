<template>
  <div class="wrapper">
    <header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/swiper1.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="@/assets/swiper2.jpeg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="@/assets/swiper3.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="@/assets/swiper4.jpg" alt="">
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
      <!--<img src="@/assets/background.png" alt="" class="header">-->
      <ul class="tab">
        <li @click="goToClassPage">
          <img src="@/assets/ketang.png" alt="">
          <div class="content">精品课堂</div>
        </li>
        <li>
          <img src="@/assets/huiyi.png" alt="">
          <div class="content">精品会议</div>
        </li>
        <li>
          <img src="@/assets/shuji2.png" alt="">
          <div class="content">新教育书籍</div>
        </li>
        <li>
          <img src="@/assets/zhuanjia.png" alt="">
          <div class="content">专家观点</div>
        </li>
      </ul>
    </header>
    <main>
      <div class="class">
        <span class="title">精品课程</span>
        <span class="more" @click="goToClassPage">更多 ></span>
      </div>
      <!--精品课程列表-->
      <div class="class-item" v-for="(item,index) in classList" :key="index+'cc'">
        <ClassItem :item="item" :color="'#d96445'"></ClassItem>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Blank',
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
  mounted () {
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  },
  methods: {
    goToClassPage(){
      this.$router.push('/class')
    }
  }
}
</script>

<style scoped lang="scss">
  .swiper-container {
    width: 375px;
    height: 200px;
    margin-bottom:1px;
  }

  .wrapper{
    width: 375px;
    height:100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    header{
      width:375px;
      /*height:245px;*/
      >img{
        width:100%;
        /*height:150px;*/
      }
      >ul{
        width:100%;
        height:95px;
        background:#d96445;
        display: flex;
        justify-content: space-around;
        align-items: center;
        >li{
          width:70px;
          height:70px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          >img{
            width:35px;
            height:35px;
          }
          .content{
            font-size:13px;
            color:white;
            margin-top:12px;
          }

        }
      }
    }
    main{
      width:350px;
      margin: 0 auto;
      .class{
        margin-top:20px;
        width:100%;
        height:30px;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        .title{
          color:#d96445;
          font-size:16px;
        }
        .more{
          color:lighten(grey,10%);
          font-size:13px;
          cursor: pointer;
        }
      }
      .parent{
        margin-top:20px;
        width:100%;
        height:30px;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        .title{
          color:#90bebf;
          font-size:16px;
        }
        .more{
          color:lighten(grey,10%);
          font-size:13px;
        }
      }
    }
  }
</style>
