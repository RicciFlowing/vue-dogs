<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="container">
      <ul>
        <dog v-for="dog in dogs" :dog="dog"> </dog>
      </ul>
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
h1 {
  text-align: center
}
ul {
  list-style: none;
}
.container {
  width: 80%;
  margin: auto;
  padding: 30px;
  background-color: #D3D3D3;
  border-radius: 5px;
}
</style>
