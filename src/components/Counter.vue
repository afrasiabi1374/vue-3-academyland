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
import { defineComponent } from 'vue';
import { useCounter } from "@/composables/useCounter"
export default defineComponent({
    name: 'CounterComponent',
    setup () {
        const { counter, plus, minus, state, counter2 }  = useCounter()
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