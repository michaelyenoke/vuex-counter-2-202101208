<template>
  <div class="about">
    <img alt="Vuex" src="../assets/you.jpeg">
    <h1>Do The Math!</h1>
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
  name: 'About',  
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
  font-size: 30px;
  width:100px;
  margin: 0 10px;
}


</style>