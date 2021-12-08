<template>
  <div class="Vue">
    <img alt="count" src="../assets/count.gif">
    <div class="counter">
     <p>{{ counter }}</p> 
    </div>
    <div class="buttons">
      <button @click="increaseCounter">vue+</button>
      <button @click="decreaseCounter">vue-</button>
    </div>


    <div class="counter">
     <p>{{ counter }}</p> 
    </div>
    <div class="buttons">
      <button @click="increaseCounter">vue+</button>
      <button @click="decreaseCounter">vue-</button>
    </div>

    <div class="counter">
     <p> {{ $store.state.counter }} </p> 
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('increaseCounter')">vuex+</button>
      <button @click="$store.dispatch('decreaseCounter')">vuex-</button>
    </div>



  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data() {
    return{
      counter:0
    }
  },
  methods:{
    increaseCounter(){
      this.counter++
    },
    decreaseCounter(){
      this.counter--
    }
  } 
 
  
}
</script>


<style>
div {
  margin-bottom: 20px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width:100px;
  margin: 0 10px;
}


</style>
