<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @clickCustomButton="clickedButton" loading="false" msg="Welcome to Your Vue.js + TypeScript App Ali Afrasiabi"/>
    <Lifecycle />
    <NumberPicker
      v-model="counter"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Lifecycle from '@/components/Lifecycle.vue';
import NumberPicker from '@/components/NumberPicker.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    Lifecycle,
    NumberPicker
},
  methods: {
    clickedButton (val:string) {
      console.log('emit message => ',val)
    },
    onValueChange (value: number) {
      console.log(value)
    }
  },
  data () {
    return {
      counter: 0
    }
  }
});
</script>
