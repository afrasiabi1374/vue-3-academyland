<template>
    <div>
       <UserInfo></UserInfo>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import UserInfo from '../components/UserInfo.vue'
    export default defineComponent({
        components: {
            UserInfo
        },
        setup(props) {
            return {}
        }
    })
</script>

<style lang="scss" scoped>

</style>
