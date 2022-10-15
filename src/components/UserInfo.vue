<template>
    <div style="margin-top: 20px">
        <span>
            نام : 
            <span>
                {{ userInfo.firstname }}
            </span>
        </span>
        |
        <span>
            نام خانوادگی : 
            <span>
                {{ userInfo.lastname }}
            </span>
        </span>
        <button @click="editInfo('نقی')">
            edit to english
        </button>
    </div>
</template>

<script>
    import { defineComponent, inject } from 'vue'
    export default defineComponent({
        setup() {
            const userInfo = inject('user-info')
            const editInfo = inject('edit-info')
            return {
                userInfo,
                editInfo
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>