import { ref } from 'vue'

function blah() {
    return "hi."
}

var ret = {
    setup() {
        const message = ref("")
        return { message }
    },
    // test: blah()
}

ret.template = blah()

export default rets