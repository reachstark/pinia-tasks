<!-- Theme Switch Button -->
<template>
    <div class="w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
         :class="{ 'bg-[#79c99e]': settingStore.darkMode}" @click="toggleTheme">
      <div class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
           :class="{ 'translate-x-4': settingStore.darkMode,}"></div>
    </div>
  </template>

<script>
import { useSettingStore } from '../stores/SettingStore'    

    export default {
        setup() {
            const settingStore = useSettingStore()
            const toggleTheme = () => {
                settingStore.toggleTheme()
            }
            return { settingStore, toggleTheme }
        }
    }
</script>