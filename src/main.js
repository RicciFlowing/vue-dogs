import Vue from 'vue'
// import Dog from './components/Dog.vue'
// Vue.component('dog',Dog);
// import DogList from './components/DogList.vue'
// Vue.component('dog-list',DogList);
import Pet from './components/Pet.vue'
Vue.component('pet',Pet);
import PetList from './components/PetList.vue'
Vue.component('pet-list',PetList);
import App from './components/App.vue'


new Vue({
  el: 'body',
  components: { App, Pet }
})
