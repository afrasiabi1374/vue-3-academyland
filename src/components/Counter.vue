<template>
    <div>
        <h1>counter in composition</h1>
        <button @click="minus"> - </button>
            <br/>
            state : {{ state.counter }}
            <br/>
            counter2 : {{ counter2 }}
            <br/>
        <button @click="plus"> + </button>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, computed, watch } from 'vue';
export default defineComponent({
    name: 'CounterComponent',
    setup(props) {
        const counter = ref(0)
        const plus = () => {
            counter.value++
        }
        const minus = () => {
            counter.value--
        }
        const state = reactive({
            counter: 1
        })
        const counter2 = computed(() => state.counter*2)
        watch(counter, (value, oldValue) => {
            console.log(`new ${value}`, `oldValue ${oldValue}`)
        })
        return {
            counter,
            plus,
            minus,
            state,
            counter2
        }
    }
})
</script>
<style>
</style>