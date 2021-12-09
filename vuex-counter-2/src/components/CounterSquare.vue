<template>
        <!--計算平方-->
    <div class="counter-square">
      {{ $store.state.counter }}
      <sup>2</sup> = 
      {{ $store.getters.counterSquare }}
    </div>  
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default ({

})
</script>

<style scoped>

</style>
