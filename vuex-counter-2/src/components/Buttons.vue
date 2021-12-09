<template>
    <!--按鈕-->
    <div class="buttons">
      <button @click="$store.dispatch('increaseCounter')">vuex+</button>
      <button @click="$store.dispatch('decreaseCounter')">vuex-</button>
    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default ({

})
</script>
<style scoped>
div {
  margin-bottom: 20px;
}

.buttons button {
  font-size: 30px;
  width:100px;
  margin: 0 10px;
}

</style>
