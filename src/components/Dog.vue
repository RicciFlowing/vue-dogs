<template>
  <li class="dog">
    <h3>{{ dog.name }}  <span v-if="dog.beginner" class="badge"> beginner friendly </span></h3>

    <div >

      <div class="pin" v-on:click="toogle_pin">
        <span v-if="dog.pinned" class="pin fa fa-thumb-tack"> </span>
        <p v-else>
          Pin this dog
        </p>
      </div>
    </div>
    <img :src="dog.image" />
    <p>{{dog.description}}</p>
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

  .clearfix::before,
  .clearfix::after {
    content: " ";
    display: table;
  }

  .clearfix::after {
    clear: both;
  }
</style>
