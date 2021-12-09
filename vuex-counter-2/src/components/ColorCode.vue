<template>
    
    <!--colorcode-->
    <div>
      <input 
      v-model = "colorCode"
      placeholder="Enter The Color Code" 
      type="text">
    </div>

</template>


<script>
//import { defineComponent } from '@vue/composition-api'

export default ({
computed:{
    colorCode:{
      get(){
            return this.$store.state.colorCode
          },
      set(newValue){
            console.log(newValue)
            this.$store.dispatch('setColorCode', newValue)
          }
    }
  },
})
</script>
