<template>
    <div>
        <h1>counter in composition</h1>
        <button @click="minus">-</button>
            state : {{ state.counter }}
        <button @click="plus">+</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
    name: 'CounterComponent',
    setup(props) {
        const counter = ref(0)
        const plus = () => {
            state.counter++
        }
        const minus = () => {
            state.counter--
        }
        const state = reactive({
            counter: 1
        })
        return {
            counter,
            plus,
            minus,
            state
        }
    }
})
</script>
<style>
</style>