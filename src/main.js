import Vue from 'vue'
import App from './App.vue'
import './assets/index.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log("NICK: ", process.env.NICK_VAR)
console.log("NICK EXPAND: ", process.env.NICK_VAR_EXPAND)
console.log("NICK PREEXIST: ", process.env.NICK_VAR_PRE)
console.log("invalidate cache")
console.log("VUE NICK: ", process.env.VUE_APP_NICK_VAR)
console.log("VUE NICK EXPAND: ", process.env.VUE_APP_EXPAND)
