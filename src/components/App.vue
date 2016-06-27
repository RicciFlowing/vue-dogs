<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="container">
      <dog-list :dogs="dogs"></dog-list>
    </div>
  </div>
</template>

<script>
var dogs = [
  {name: 'Struppi', pinned: true, age: 1, beginner: true,
   description: "Sweet little puppy ready to be cuddled.", image: require('../assets/dog1.jpg')},
  {name:'Lessi', pinned: false,age: 4, beginner: false,
   description: "Give home to a pair of two lovelable and agile friends.", image:require('../assets/dog-2.jpg')},
  {name:'Kelvin', pinned: false,age: 2, beginner: false,
   description: "Agile and ready for home near the water", image:require('../assets/dog_4.jpg')},
  {name:'Kelvin', pinned: false,age: 2, beginner: true,
   description: "A cozy friend. Been loyal to it master for long years.", image:require('../assets/dog_3.jpg')},
];

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello! Here are the dogs',
      dogs: dogs
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
body {
  @import url(https://fonts.googleapis.com/css?family=Crimson+Text);
  font-family: 'Crimson Text', serif;
}
h1 {
  text-align: center
}

.container {
  width: 80%;
  margin: auto;
  padding: 30px;
  background-color: #D3D3D3;
  border-radius: 5px;
}

@media (max-width: 800px) {
  body {
    width: 100%;
  }
  .container {
    padding: 10px;
    width: 90%;
  }
 }

@media (max-width: 400px) {
  body {
    width: 100%;
  }
  .container {
    margin: 0;
    padding: 10px;
    width: 100%;
    border-radius: 0px;
  }
 }
</style>
