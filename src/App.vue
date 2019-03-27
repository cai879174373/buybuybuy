<template>
  <div id="app">
   <h2 @click='message="你好呀"'>{{message}}</h2>
  </div>
</template>

<script>


export default {
  name: 'app',

  data(){
    return {
      message:'呀呀呀呀呀呀'
    }
  }
  
}
</script>

<style>


</style>
