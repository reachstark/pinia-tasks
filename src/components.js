
import TaskDetailsWide from "./components/TaskDetailsWide.vue";
import TaskFormWide from "./components/TaskFormWide.vue";
import ThemeSwitch from "./components/ThemeSwitch.vue";
import AppWide from "./components/widescreen/app_wide.vue";
import AppMobile from "./components/mobile/app_mobile.vue";
import TaskDetailsMobile from "./components/TaskDetailsMobile.vue";
import AddTaskPopup from "./components/AddTaskPopup.vue";
import RefreshButton from "./components/RefreshButton.vue";

export default {
    install(app) {
        // Main
        app.component('AppWide', AppWide)
        app.component('AppMobile', AppMobile)
        // Components
        app.component('ThemeSwitch', ThemeSwitch)
        app.component('TaskDetailsWide', TaskDetailsWide)
        app.component('TaskDetailsMobile', TaskDetailsMobile)
        app.component('TaskFormWide', TaskFormWide)
        app.component('AddTaskPopup', AddTaskPopup)
        app.component('RefreshButton', RefreshButton)
    }
}