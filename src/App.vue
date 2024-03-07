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
        <div class="loading" v-if="loading">Loading tasks...</div>

         <!-- content -->
        <div class="task-list" v-if="filter === 'all'">
            <h3>All Tasks ({{ totalCount }})</h3>
            <div v-for="task in tasks">
                <TaskDetails :task="task"/>
            </div>
        </div>
        <div class="task-list" v-if="filter === 'favs'">
            <h3>Favorites ({{ favsCount }})</h3>
            <div v-for="task in favs">
                <TaskDetails :task="task"/>
            </div>
        </div>
        <div class="task-list" v-if="filter === 'pending'">
            <h3>Pending ({{ pendingCount }})</h3>
            <div v-for="task in pendingTasks">
                <TaskDetails :task="task"/>
            </div>
        </div>
        <div class="task-list" v-if="filter === 'completed'">
            <h3>Completed ({{ completedCount }})</h3>
            <div v-for="task in completedTasks">
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
    import { storeToRefs } from 'pinia';
    export default {
        components: { TaskDetails, TaskForm },
        setup() {
            const taskStore = useTaskStore()
            
            // call loading instead of taskStore.loading
            const { tasks, loading, favs, totalCount, favsCount, pendingTasks, pendingCount, completedTasks, completedCount } = storeToRefs(taskStore)

            taskStore.fetchData()

            const filter = ref('all')

            return { taskStore, filter, tasks, loading, favs, totalCount, favsCount, pendingTasks, pendingCount, completedTasks, completedCount }
        }
    }
</script>