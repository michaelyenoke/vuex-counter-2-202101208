import { createStore } from 'vuex'
import Vue from 'vue' //無法直接import 'express' -> request & response 
import axios from 'axios' 



export default createStore({
  state: {
    counter:0,
    colorCode:''
  },
  mutations: {
    increaseCounter(state, actions_passed_randomNumber){
      //state.counter++
      console.log('randomNumberAdd', actions_passed_randomNumber)
      //console.log(actions_passed_randomNumber)
      state.counter += actions_passed_randomNumber
    },
    decreaseCounter(state, actions_passed_randomNumber){
      //state.counter--
      console.log('randomNumberMinus', actions_passed_randomNumber)
      state.counter -= actions_passed_randomNumber
    }, 
    setColorCode(state, newValue){
      state.colorCode = newValue
    }
  },
  actions: {
    increaseCounter({commit}) {
      console.log('increaseCounter(action)')
      axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
           .then(response => {
              //console.log('response:', response)
              commit('increaseCounter', response.data)
          })
    },     
    decreaseCounter({commit}) {
      console.log('decreaseCounter(action)')
      axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
           .then(response => {
              //console.log('response:', response)
              commit('decreaseCounter', response.data)
          })
    },
    setColorCode({commit}, newValue){
        commit('setColorCode', newValue)
    }     
  },
  getters:{
    counterSquare(state){
      return state.counter*state.counter
    }
  },
  modules: {
  }
})
