<template>
  <div class="wrapper">
    <header>
      <img src="@/assets/1.png" alt="" class="header">
      <ul class="tab">
        <li @click="goToClassPage">
          <img src="@/assets/1.png" alt="">
          <div class="content">精品课堂</div>
        </li>
        <li>
          <img src="@/assets/1.png" alt="">
          <div class="content">精品会议</div>
        </li>
        <li>
          <img src="@/assets/1.png" alt="">
          <div class="content">新教育书籍</div>
        </li>
        <li>
          <img src="@/assets/1.png" alt="">
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

      <!--父母课堂列表-->
      <div class="parent">
        <span class="title">父母课堂</span>
        <span class="more"></span>
      </div>
      <!--精品课程列表-->
      <div class="class-item" v-for="(item,index) in parentList" :key="index+'bb'">
        <ClassItem :item="item" :color="'#90bebf'"></ClassItem>
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
      ],
      parentList:[
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
  mounted () {

  },
  methods: {
    goToClassPage(){
      this.$router.push('/class')
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper{
    width: 375px;
    height:100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    header{
      width:375px;
      height:245px;
      >img{
        width:100%;
        height:150px;
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
          >img{
            width:60px;
            height:40px;
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
