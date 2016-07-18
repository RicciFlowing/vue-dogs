<template>
  <div class="input-group">
    <input class="search-form" v-model="search" placeholder="Search">
    <div>
      <input type="checkbox" id="beginner-checkbox" v-model="beginner">
      <label for="checkbox"> beginner friendly</label>
    </div>
    <select class="type-select" v-model="type" multiple>
      <option selected>dog</option>
      <option selected>cat</option>
    </select>
  </div>

  <ul>
    <pet v-for="pet in pets| filterBy true in 'pinned'" :pet="pet"> </pet>
    <pet v-for="pet in pets| filterBy false in 'pinned' | filterBy search | filterBy beginner||null in 'beginner' | filterBy type||null in 'type'" :pet="pet"> </pet>
  </ul>
</template>

<script>
// Vue.filter('type', function (pets, typeArray) {
//   pets = pets.filter((pet)=> { pet.type})
//   return begin + value + end
// })

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

.type-select{
  margin: 10px;
  padding: 10px;
}

.search-form{
  display: block;
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
