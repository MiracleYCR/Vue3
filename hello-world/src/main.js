import { createApp } from 'vue'
import layout from './layout'


const app = createApp({
  template: `<layout></layout>`,
  components: {
    layout
  }
})

app.mount('#app')