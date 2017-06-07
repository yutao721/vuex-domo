<template>
  <div>
    <h1>Count is :{{count}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default{
    data(){
      return {}

    },
    computed: mapGetters([
      'count'
    ]),
    methods: mapActions([
      'increment',
      'decrement'
    ])
  }
</script>

<style></style>
