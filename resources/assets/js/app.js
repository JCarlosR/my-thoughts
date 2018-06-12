require('./bootstrap');

window.Vue = require('vue');

Vue.component('my-thoughts-component', require('./components/MyThoughtsComponent.vue'));
Vue.component('form-component', require('./components/FormComponent.vue'));
Vue.component('thought-component', require('./components/ThoughtComponent.vue'));

const app = new Vue({
    el: '#app'
});
