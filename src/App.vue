<template>
    <main>
        <!-- heading -->
        <header>
            <img src="./assets/tasks_logo.svg" alt="tasks logo">
            <h1>{{ taskStore.appName }}</h1>
        </header>

        <!-- form -->
        
        <div class="new-task-form">
            <TaskForm />
        </div>

        <!-- filter -->
        <div class="filter">
            <button class="filter-btn" :class="{ 'active': filter === 'all' }"
            @click="filter = 'all'">All</button>
            <button class="filter-btn" :class="{ 'active': filter === 'favs' }"
            @click="filter = 'favs'">Favorites</button>
            <button class="filter-btn" :class="{ 'active': filter === 'pending' }"
            @click="filter = 'pending'">Pending</button>
            <button class="filter-btn" :class="{ 'active': filter === 'completed' }"
            @click="filter = 'completed'">Completed</button>
        </div>

        <!-- loading -->
        <div class="loading" v-if="taskStore.loading">Loading tasks...</div>

         <!-- content -->
        <div class="task-list" v-if="filter === 'all'">
            <h3>All Tasks ({{ taskStore.totalCount }})</h3>
            <div v-for="task in taskStore.tasks">
                <TaskDetails :task="task"/>
            </div>
        </div>
        <div class="task-list" v-if="filter === 'favs'">
            <h3>Favorites ({{ taskStore.favsCount }})</h3>
            <div v-for="task in taskStore.favs">
                <TaskDetails :task="task"/>
            </div>
        </div>
        <div class="task-list" v-if="filter === 'pending'">
            <h3>Pending ({{ taskStore.pendingCount }})</h3>
            <div v-for="task in taskStore.pendingTasks">
                <TaskDetails :task="task"/>
            </div>
        </div>
        <div class="task-list" v-if="filter === 'completed'">
            <h3>Completed ({{ taskStore.completedCount }})</h3>
            <div v-for="task in taskStore.completedTasks">
                <TaskDetails :task="task"/>
            </div>
        </div>

    </main>
</template>

<script>
    import { useTaskStore } from './stores/TaskStore'
    import TaskDetails from './components/TaskDetails.vue'
    import TaskForm from './components/TaskForm.vue'
    import { ref } from 'vue'
    export default {
        components: { TaskDetails, TaskForm },
        setup() {
            const taskStore = useTaskStore()

            taskStore.fetchData()

            const filter = ref('all')

            return { taskStore, filter }
        }
    }
</script>