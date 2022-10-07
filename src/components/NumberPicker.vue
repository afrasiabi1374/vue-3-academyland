<template>
    <div>
    <h2>Number picker</h2>
        <button @click="plus">+</button>
        {{ value }}
        <button @click="minus">-</button>
    </div>
</template>
<script lang="ts">
    import {defineComponent} from 'vue'
    export default defineComponent({
        props: {
            value:{
                type: Number,
                default: 0
            }
        },
        emits: ['change'],
        methods: {
            plus () {
                this.$emit('change', this.value + 1)
            },
            minus () {
                if (this.value !== 0) {
                    this.$emit('change', this.value - 1)
                }
            },
        }
    })
</script>
<style lang="scss" scoped>
</style>