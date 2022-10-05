<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
    <h3>
      counter : {{ counter }}
    </h3>
    <h3>
      computed counter : {{ computedCounter }}
    </h3>
    <h3>
      computed name {{ fullName }}
    </h3>
    <button @click="plus(2)">+</button>
    <br>
    <button @click="customButtonClicked()">my custom button</button>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props:{
      msg:{
        type: String,
        required: true,
        default: 'HELLO '
      },
      loading: {
        type: Boolean,
        required: true
      }
    },
    data () {
      return {
        counter: 0,
        firstName: 'ali',
        lastName: 'afrasisbi'
      }
    },
    methods: {
      plus (step: number) {
        this.counter = this.counter+step
      },
      customButtonClicked () {
        this.$emit('clickCustomButton', 'clicked by emiting!!')
      }
    },
    computed: {
      computedCounter () {
        return this.counter + 10
      },
      fullName () {
        return this.firstName + ' ' + this.lastName
      }
    }
  })
</script>