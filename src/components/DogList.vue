<template>
  <ul>
    <dog v-for="dog in dogs" :dog="dog"> </dog>
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
