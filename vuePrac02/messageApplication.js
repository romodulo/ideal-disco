import { ref } from 'vue'


export default {
    setup() {
        const message = ref('place')
        return { message }
    },
    template: `<h1>{{message}}</h1>`
}