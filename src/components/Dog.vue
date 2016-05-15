<template>
  <li class="dog">
    <h3>{{ dog.name }} </h3>
    <img :src="dog.image" />
    <p>{{dog.description}}</p>
  </li>
</template>

<script>
export default {
  props: ['dog'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dog {
    display: inline;
  }
  img{
    width: 200px;
  }
  .clearfix::before,
  .clearfix::after {
    content: " ";
    display: table;
  }

  .clearfix::after {
    clear: both;
  }
</style>
