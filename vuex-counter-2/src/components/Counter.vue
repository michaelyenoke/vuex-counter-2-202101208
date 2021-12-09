<template>
    <!--計算結果-->
    <div 
      :style="{color: $store.state.colorCode}"
      class="counter">
     <p> {{ $store.state.counter }} </p> 
    </div>  
</template>

<script>

//import { defineComponent } from '@vue/composition-api'

export default ({

})

</script>

<style scoped>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 60px;
}

</style>