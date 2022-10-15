<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @clickCustomButton="clickedButton" loading="false" msg="Welcome to Your Vue.js + TypeScript App Ali Afrasiabi"/>
    <Lifecycle />
    <NumberPicker
      v-model="counter"
    />
    <Counter />
    <Card>
      <template #default>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, harum ipsum voluptate in assumenda ab corporis, officia porro quis, iste maiores rem ex magnam voluptas ipsa earum dignissimos laboriosam nam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus cum aut impedit vel et? Voluptatibus eveniet asperiores atque magnam amet alias tenetur labore illum, modi consequuntur neque optio eius ipsa?
      </template>
      <template #actionButtons="{counter}">
        counter: {{counter}}
        <button>ثبت</button>
        <button>جزییات</button>
      </template>
    </Card>
    <br><br><br>
    <UserCard></UserCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, readonly } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Lifecycle from '@/components/Lifecycle.vue';
import NumberPicker from '@/components/NumberPicker.vue';
import Counter from '@/components/Counter.vue'
import Card from '../components/Card.vue'
import UserCard from '../components/UserCard.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    Lifecycle,
    NumberPicker,
    Counter,
    Card,
    UserCard
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
  },
  setup () {
    const userInfo = reactive({ firstname: 'علی', lastname: 'اکبری' })
    provide('user-info', readonly(userInfo))
    provide('edit-info', (firstName:string) => {
      userInfo.firstname = firstName
    })
    return {
    }
  }
});
</script>
