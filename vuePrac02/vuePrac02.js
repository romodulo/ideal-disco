import {createApp, ref} from 'vue'

createApp({
    setup() {
        const message = ref('place')
        return { message }
    }
}).mount('#app')