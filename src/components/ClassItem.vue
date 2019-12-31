<template>
    <div class="item-wrapper">
      <img class="img-avatar" :src="item.img" alt="">
      <div class="name">{{item.name}}</div>
      <div class="price">
        <span class="current-price">￥{{item.price}}</span>
        <span  class="origin-price">[原价￥{{item.originalPrice}}]</span>
      </div>
      <div class="total-class">{{item.totalClass}}节课程</div>
      <div class="views">
        <img src="@/assets/view.png" alt="">
        <span class="number">{{item.views}}</span>
      </div>
      <div class="update-number">
        已更新{{item.updateClass}}期
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ClassItem',
    props:{
      item:{
        type:Object,
        default:()=>{}
      }
    }
  }
</script>

<style scoped lang="scss">
.item-wrapper{
  width:100%;
  height:100px;
  border:1px solid #d96445;
  border-radius: 5px;
  position: relative;
  margin-bottom:20px;
  .img-avatar{
    width:80px;
    height:80px;
    position: absolute;
    top:10px;
    left:10px;
  }
  .name{
    position: absolute;
    top:20px;
    left:105px;
    font-size:18px;
    color:black;
  }
  .price{
    position: absolute;
    top:45px;
    left:105px;
    .current-price{
      color: #d96445;
      font-size:16px;

    }
    .origin-price{
      color:#bfbfbf;
      font-size:12px;
      text-decoration:line-through;
    }
  }

  .total-class{
    position: absolute;
    top:48px;
    left:235px;
    color:#bfbfbf;
    font-size:13px;
  }
  .views{
    position: absolute;
    top:65px;
    left:105px;
    >img{
      width:16px;
      height:16px;
    }
    .number{
      color:#bfbfbf;
      font-size:12px;
      margin-left:8px;
    }
  }

  .update-number{
    position: absolute;
    top:69px;
    left:175px;
    color:#bfbfbf;
    font-size:12px;
  }
}
</style>
