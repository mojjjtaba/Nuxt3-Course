export default function() {
    const count = ref(0)
    const text = 'Counter composable text'

    function increment() {
        count.value++;
    }

    return {
        count,
        increment,
        text
    }
}