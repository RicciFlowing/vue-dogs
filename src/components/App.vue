<template>
  <div id="app">
    <h1> Pets to be loved</h1>
    <div class="container">
      <pet-list :pets="pets"></pet-list>
    </div>
  </div>
<button id="show-modal" @click="toggleModal">Show Modal</button>
  <modal :show.sync="showModal">
  <h3 slot="header">custom header</h3>
</modal>
</template>

<script>
var pets = [
  {name: 'Struppi', pinned: true, age: 1, beginner: true, type: "dog",
   description: "Sweet little puppy ready to be cuddled.", image: require('../assets/dog1.jpg')},
  {name:'Lessi', pinned: false,age: 4, beginner: false, type: "dog",
   description: "Give home to a pair of two lovelable and agile friends.", image:require('../assets/dog-2.jpg')},
  {name:'Kelvin', pinned: false,age: 2, beginner: false, type: "dog",
   description: "Agile and ready for home near the water", image:require('../assets/dog_4.jpg')},
  {name:'Kelvin', pinned: false,age: 2, beginner: true, type: "dog",
   description: "A cozy friend. Been loyal to it master for long years.", image:require('../assets/dog_3.jpg')},
   {name:'Cozy', pinned: false,age: 1, beginner: false, type: "cat",
    description: "Free and independet as a cat should be", image:require('../assets/cat_1.jpg')},
];

export default {
  data () {
    return {
      pets: pets,
      showModal: false
    }
  },
  methods: {
    toggleModal(){
      console.log(this.showModal);
      this.showModal = !this.showModal
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
    margin: 0;
    padding: 10px;
    width: 100%;
    border-radius: 0px;
  }
 }
</style>
