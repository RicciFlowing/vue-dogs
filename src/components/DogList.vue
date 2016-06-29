<template>
  <div class="input-group">
    <input class="search-form" v-model="search" placeholder="Search">
    <input type="checkbox" id="beginner-checkbox" v-model="beginner">
    <label for="checkbox"> beginner friendly</label>
  </div>

  <ul>
    <dog v-for="dog in dogs| filterBy true in 'pinned'" :dog="dog"> </dog>
    <dog v-for="dog in dogs| filterBy false in 'pinned' | filterBy search | filterBy beginner||null in 'beginner'" :dog="dog"> </dog>
  </ul>
</template>

<script>
export default {
  props: ['dogs'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.input-group {
  text-align: center;
}


.search-form{
  display: inline-block;
  border: none;
  border-radius: 2px;
  border-bottom: solid 1px;
  height: 30px;
  width: 200px;
  text-align: center;
  margin-right: 20px;
}
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
