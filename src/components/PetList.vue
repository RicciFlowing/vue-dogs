<template>
  <div class="input-group">
    <input class="search-form" v-model="search" placeholder="Search">
    <div>
      <input type="checkbox" id="beginner-checkbox" v-model="beginner">
      <label for="checkbox"> beginner friendly</label>
    </div>
  </div>

  <ul>
    <dog v-for="pet in pets| filterBy true in 'pinned'" :dog="dog"> </dog>
    <dog v-for="pet in pets| filterBy false in 'pinned' | filterBy search | filterBy beginner||null in 'beginner'" :dog="dog"> </dog>
  </ul>
</template>

<script>
export default {
  props: ['pets'],
  data() { return {
      search: '',
      beginner: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.input-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}



.search-form{

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

@media (max-width: 600px) {
  ul {
    width: 100%;
    list-style: none;
    justify-content: center;
  }

  .input-group {
    flex-direction: column;
    align-items: center;
  }
 }

</style>
