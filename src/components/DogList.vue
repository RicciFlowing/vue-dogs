<template>
  <input class="search-form" v-model="search" placeholder="Search">
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
.search-form{
  display: block;
  border: none;
  border-bottom: solid 1px;
  height: 20px;
  width: 200px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
