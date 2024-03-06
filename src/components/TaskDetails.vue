<template>
    <div class="task">
        <h4>{{ task.title }}</h4>
        <div class="icons">
            <i class="material-icons"
            @click="taskStore.deleteTask(task.id)">delete</i>
            <i class="material-icons" :class = "{ 'active': task.isFav }"
            @click="taskStore.toggleFav(task.id)">favorite</i>
            <i class="material-icons" :class = "{ 'task-completed': task.completed }"
            @click="taskStore.toggleCompleted(task.id)">radio_button_unchecked</i>
        </div>
    </div>
</template>

<script>
    import { useTaskStore } from '../stores/TaskStore'
    export default {
        props: ['task'],
        setup() {
            const taskStore = useTaskStore()
            return { taskStore }
        }
    }
</script>