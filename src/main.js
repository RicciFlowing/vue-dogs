import Vue from 'vue'
import Dog from './components/Dog.vue'
Vue.component('dog',Dog)
import App from './components/App.vue'


new Vue({
  el: 'body',
  components: { App, Dog }
})
