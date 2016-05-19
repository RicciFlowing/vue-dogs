<template>
  <input class="search-form"v-model="search">
  <ul>
    <dog v-for="dog in dogs| filterBy search" :dog="dog"> </dog>
  </ul>
</template>

<script>
export default {
  props: ['dogs'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
