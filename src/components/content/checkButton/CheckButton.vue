<template>
  <div id="check-button" :class="{choose:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="" >
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    data(){
      return{
        isChoose:false
      }
    },
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    },
  }
</script>

<style scoped>
  #check-button{
    margin-right: 5px;
    border: 2px solid rgb(204, 198, 198);
    border-radius: 50%;
  }
  
  .choose{
    background-color: rgb(228, 62, 90);
  }

</style>
