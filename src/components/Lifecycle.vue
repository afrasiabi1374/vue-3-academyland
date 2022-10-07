<template>
    <div>
        <h1>lifecycles</h1>
        <button @click="counter++">
            +plus+ {{ counter }}
        </button>
    </div>
</template>
<script lang="ts">
    import {defineComponent} from 'vue'
    export default defineComponent({
        name: 'LifeCycle',
        data(){
            return {
                counter: 0,
                a: 0
            }
        },
        beforeCreate () {
            console.log('before create')
        },
        created () {
            console.log('created')
        },
        beforeMount () {
            console.log('beforeMount')
        },
        async mounted () {
            await this.$nextTick()
            this.counter++
            this.a++
            console.log('mounted')
        },
        beforeUpdate () {
            console.log('beforeUpdate')
        },
        updated () {
            console.log('updated')   
        }
    })
</script>