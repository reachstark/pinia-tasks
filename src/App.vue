<template>
    <main>
        <div v-if = "!settingStore.mobileView"> <AppWide /> </div>
        <div v-else > <AppMobile /> </div>
    </main>
</template>

<script>
    import { useTaskStore } from './stores/TaskStore'
    import { useSettingStore } from './stores/SettingStore'
    import { onMounted, onUnmounted } from 'vue'

    export default {
        setup() {
            const taskStore = useTaskStore()
            const settingStore = useSettingStore()
            taskStore.loadData()

            const updateWidth = () => {
                settingStore.updateWidth()
            }

            onMounted(() => {
                updateWidth() // set initial width
                window.addEventListener('resize', updateWidth)
            })

            onUnmounted(() => {
                window.removeEventListener('resize', updateWidth)
            })

        return { settingStore }
        }
    }
</script>
