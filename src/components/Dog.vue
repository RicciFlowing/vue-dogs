<template>
  <div class="dog">
    <h3>{{ dog.name }} </h3>
    <img :src="dog.image" />
    <p class="clearfix">Ein lieber Hund</p>
  </div>
</template>

<script>
export default {
  props: ['dog'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    float: left;
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
