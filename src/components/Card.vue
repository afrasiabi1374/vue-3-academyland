<template>
    <div class="card-container">
        <p>
            <slot></slot>
        </p>
        <div>
            <slot :counter="5" name="actionButtons">
                <!-- مقدار دیفالت -->
                <button>مقدار دیفالت</button>
            </slot>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useCounter } from '@/composables/useCounter'
    export default defineComponent({
        name: 'CardComponent',
        setup () {
            const { counter, plus, state, plusState, counter2 } = useCounter()

            return {
                counter, plus, state, plusState, counter2
            }
        }
    })
</script>

<style lang="scss" scoped>
    .card-container {
        border: 2px solid rgba(207, 207, 20);
        max-width: 20rem;
        padding: 1rem;
        margin: 100px auto;
    }
</style>