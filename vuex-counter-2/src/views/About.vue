<template>
  <div class="about">
    <img alt="Vuex" src="../assets/you.jpeg">
    <h1>Do The Math!</h1>
    
    <counter />
    <counter-square />
    <buttons />
    <color-code />




  </div>
</template>


<script>

export default {
  name: 'About', 

  components:{
    'counter': require('@/components/Counter.vue').default,
    'counter-square': require('@/components/CounterSquare.vue').default,
    'buttons':require('@/components/Buttons.vue').default,
    'color-code':require('@/components/ColorCode.vue').default
    
  }
}
</script>


<style>
div {
  margin-bottom: 10px;
}
</style>