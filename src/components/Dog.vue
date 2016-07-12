<template>
  <li class="dog">
    <div class="title clearfix">
      <h3>{{ dog.name }} </h3>
      <div class="pin" v-on:click="toogle_pin">
        <p v-if="dog.pinned" class="pin fa fa-thumb-tack no-margin"> </p>
        <p class="no-margin" v-else>
          Pin this dog
        </p>
      </div>
    </div>

    <img :src="dog.image" />
    <p>{{dog.description}}</p>
    <p v-if="dog.beginner"> This dog is beginner friendly </p>
  </li>
</template>

<script>
export default {
  props: ['dog'],
  methods: {
    toogle_pin(){
      this.dog.pinned = !this.dog.pinned
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    margin-bottom: 10px;
    padding: 10px;
  }
  .pin {
    display: inline;
    float: right;
  }
  .dog {
    margin: 30px;
    flex-basis: 400px;
    flex-grow: 1;
    max-width: 30%;
    }
  h3 {
    @import url(https://fonts.googleapis.com/css?family=Dancing+Script);
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
    width: 80;
    display: inline;
  }
  img{
    border-radius: 50%;
    width: 180px;
    height: 180px;
    float: left;
    margin: 10px;
    margin-top: 0;
    margin-left: 0;
  }
  .badge{
    font-family: 'Crimson Text', serif;
    float: right;
    font-size: 1rem;
  }
  .no-margin{
    margin: 0;
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
