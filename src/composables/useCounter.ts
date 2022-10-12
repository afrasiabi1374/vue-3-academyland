import { 
    reactive,
    ref,
    computed,
    watch,
    watchEffect 
} from 'vue';
export const useCounter = () => {
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
    watch(counter, (value:number, oldValue:number) => {
        console.log(`new => ${value}`, `oldValue => ${oldValue}`)
    })
    watch(() => state.counter, (value:number) => {
        console.log('watch on property =>', value)
    })
    watchEffect(() => {
        console.log('watch_EFFECT  ==>', counter.value)
    })
    return {
        counter,
        plus,
        minus,
        state,
        counter2
    }
}