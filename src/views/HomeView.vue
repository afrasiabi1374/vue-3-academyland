<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @clickCustomButton="clickedButton" loading="false" msg="Welcome to Your Vue.js + TypeScript App Ali Afrasiabi"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  methods: {
    clickedButton(val:string){
      console.log('emit message => ',val)
      
    }
  }
});
</script>
