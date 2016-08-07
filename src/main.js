import Vue from 'vue'
import petType from './filter/type.js'
import Modal from './components/Modal.vue'
Vue.component('modal',Modal);
import Pet from './components/Pet.vue'
Vue.component('pet',Pet);
import PetList from './components/PetList.vue'
Vue.component('pet-list',PetList);
import App from './components/App.vue'


Vue.filter('petType', petType);


new Vue({
  el: 'body',
  components: { App, Pet }
})
