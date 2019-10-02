<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import listBook from '@/components/Book/listBook.vue';

export default {
  components:{
    'list-books': listBook
  },
  data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
