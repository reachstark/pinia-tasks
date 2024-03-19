<template>
    <main>
        <!-- heading -->
        <header>
            <img src="../../assets/tasks_logo.svg" alt="tasks logo">
            <h1>{{ taskStore.appName }}</h1>
        </header>

        <!-- form -->
        
        <div class="new-task-form">
            <TaskFormWide />
        </div>

        <!-- filter -->
        <div class="filter">
            <div>
            <RefreshButton />
            </div>
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
                <TaskDetailsWide :task="task"/>
            </div>
        </div>
        <div class="task-list" v-if="filter === 'favs'">
            <h3>Favorites ({{ favsCount }})</h3>
            <div v-for="task in favs">
                <TaskDetailsWide :task="task"/>
            </div>
        </div>
        <div class="task-list" v-if="filter === 'pending'">
            <h3>Pending ({{ pendingCount }})</h3>
            <div v-for="task in pendingTasks">
                <TaskDetailsWide :task="task"/>
            </div>
        </div>
        <div class="task-list" v-if="filter === 'completed'">
            <h3>Completed ({{ completedCount }})</h3>
            <div v-for="task in completedTasks">
                <TaskDetailsWide :task="task"/>
            </div>
        </div>

    </main>
</template>

<script>
    import { ref } from 'vue'
    import { storeToRefs } from 'pinia';
    import { useTaskStore } from '../../stores/TaskStore'
    export default {
        setup() {
            const taskStore = useTaskStore()
            
            // call loading instead of taskStore.loading
            const { tasks, loading, favs, totalCount, favsCount, pendingTasks, pendingCount, completedTasks, completedCount } = storeToRefs(taskStore)

            const filter = ref('all')

            return { taskStore, filter, tasks, loading, favs, totalCount, favsCount, pendingTasks, pendingCount, completedTasks, completedCount }
        }
    }
</script>