<template>
  <div class="toast" v-show="isShowMes">
    <div class="mes">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return{
      isShowMes:false,
      message:''
    }
  },
  methods: {
      //直接调用此方法即可显示提示信息
      showToast(message, duration = 500) {
        this.isShowMes = true;
        this.message = message;
        setTimeout(() => {
          this.isShowMes = false;
          this.message = ''
        }, duration)
      }
  },
}
</script>

<style scoped>
  .toast{
    position: fixed;
    z-index: 9999;
    top: 57%;
    left: 29%;
    font-size: 18px;
    color: white;
    padding: 10px 15px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
  }
  .mes{
    font-size: 14px;
    color: #f8d9e3;
  }
</style>
