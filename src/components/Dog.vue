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
    padding: 20px;
    flex-basis: 400px;
    }
  h3 {
    @import url(https://fonts.googleapis.com/css?family=Dancing+Script);
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
  }
  img{
    width: 200px;
    float: left;
    margin: 10px;
    margin-top: 0;
    margin-left: 0;
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
