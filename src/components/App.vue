<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="container">
      <ul>
        <dog v-for="dog in dogs" :dog="dog"> </dog>
      </ul>
    </div>
  </div>
</template>

<script>
var dogs = [
  {name: 'Struppi', description: "Food truck asymmetrical portland, YOLO cliche godard green juice vice kickstarter pinterest freegan. Readymade shabby chic flexitarian bespoke DIY, pinterest banjo four loko. Tattooed blog humblebrag bespoke. Tousled banh mi cornhole readymade, meggings kombucha franzen polaroid. Pickled mlkshk ramps portland. Trust fund gentrify cold-pressed, umami single-origin coffee crucifix leggings. Kitsch bespoke echo park normcore", image: require('../assets/dog1.jpg')},
  {name:'Lessi', description: "Food truck asymmetrical portland, YOLO cliche godard green juice vice kickstarter pinterest freegan. Readymade shabby chic flexitarian bespoke DIY, pinterest banjo four loko. Tattooed blog humblebrag bespoke. Tousled banh mi cornhole readymade, meggings kombucha franzen polaroid. Pickled mlkshk ramps portland. Trust fund gentrify cold-pressed, umami single-origin coffee crucifix leggings. Kitsch bespoke echo park normcore", image:require('../assets/dog-2.jpg')}
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
body {
  font-family: Helvetica, sans-serif;
}
h1 {
  text-align: center
}
ul {
  list-style: none;
  display: flex;
}
.container {
  width: 80%;
  margin: auto;
  padding: 30px;
  background-color: #D3D3D3;
  border-radius: 5px;
}
</style>
