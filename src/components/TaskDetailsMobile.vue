<template>
    <div class="task-mobile">
        <h4>{{ task.title }}</h4>
        <div class="icons">
             <!-- Delete Icon Button -->
            <i class="material-icons"
            @click="taskStore.deleteTask(task.id)">delete</i>
            <!-- Favorite Icon Button -->
            <i class="material-icons" :class = "{ 'active': task.isFav }"
            @click="taskStore.toggleFav(task.id)">favorite</i>
            <!-- Task Completion Icon Button -->
            <i class="material-icons" :class = "{ 'task-completed': task.completed }"
            @click="taskStore.toggleCompleted(task.id)" v-if="!task.completed">radio_button_unchecked</i>
            <i class="material-icons" :class = "{ 'task-completed': task.completed }"
            @click="taskStore.toggleCompleted(task.id)" v-else>check_circle</i>
        </div>
    </div>
</template>

<script>
    import { useTaskStore } from '../stores/TaskStore.js'
    export default {
        props: ['task'],
        setup() {
            const taskStore = useTaskStore()
            return { taskStore }
        }
    }
</script>./TaskDetailsWide.vue/index.js