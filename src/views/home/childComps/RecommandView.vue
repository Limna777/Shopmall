<template>
  <div class="recommend">
    <div v-for="item in recommands" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommands: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  font-size: 16px;
}
.recommend-item img{
  width: 75px;
  height: 75px;
  margin-bottom: 7px;

}
</style>
