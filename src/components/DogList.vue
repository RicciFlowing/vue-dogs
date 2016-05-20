<template>
  <input class="search-form" v-model="search" placeholder="Search">
  <input type="checkbox" id="checkbox" v-model="beginner">
  <label for="checkbox"> beginner friendly</label>
  <ul>
    <dog v-for="dog in dogs| filterBy search | filterBy beginner||null in 'beginner'" :dog="dog"> </dog>
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
  border-radius: 2px;
  border-bottom: solid 1px;
  height: 30px;
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
