<template>
  <div id="app">
    <h1>{{ msg }}</h1>
      <li v-for="dog in dogs">
        <dog :dog="dog"> </dog>
      </li>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello! Here are the dogs',
      dogs: [{name: 'Struppi', image: require('../assets/dog1.jpg')}, {name:'Lessi', image:require('../assets/dog-2.jpg')}]
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
