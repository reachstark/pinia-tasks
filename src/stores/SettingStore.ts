import { defineStore } from 'pinia'

export const useSettingStore = defineStore('settingStore', {
    state: () => ({
        darkMode: true,
        mobileView: false,
    }),
    getters: {
        getDarkMode: (state) => state.darkMode,
        getMobileView: (state) => state.mobileView,
    },
    actions: {
        toggleTheme() {
            this.darkMode = !this.darkMode
        },
        setMobileView(bool: boolean) {
            this.mobileView = bool
        },
        updateWidth() {
            const screenWidth = window.innerWidth
            const isMobile = screenWidth < 640
            this.setMobileView(isMobile)
        }
    },
})