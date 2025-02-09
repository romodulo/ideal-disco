import {createApp, ref} from 'vue'

createApp({
    setup() {
        const visual = ref(3)
        const exception = () => {visual.value = visual.value + 1}
        return {visual, exception}
    },
    template: `
    <button class = "personalClass" v-on:click = "exception">
        {{visual}}
    </button>
    `,
    style: `
        .personalClass {
            padding: 15px 36px;
        }
    `
})
.mount('#app2')