<template>
    <div>
      <!-- App Bar -->
      <header class="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center justify-center">
        <div class="appbar">
        {{ taskStore.appName }}
       </div>
       <div>
            <RefreshButton />
        </div>
      </header>
  
      <!-- Main Content Area -->
      <main class="mt-16 mb-16 px-4">
        
       <!-- loading -->
       <div class="loading" v-if="loading">Loading tasks...</div>
       
       <div class="task-list-mobile">
        <div v-if = "filter === 'all'">
        <div v-for="task in tasks">
                <TaskDetailsMobile :task="task"/>
            </div>
        </div>
        <div v-if = "filter === 'favs'">
            <div v-for="task in favs">
                <TaskDetailsMobile :task="task"/>
            </div>
        </div>
        <div v-if = "filter === 'pending'">
            <div v-for="task in pendingTasks">
                <TaskDetailsMobile :task="task"/>
            </div>
        </div>
        <div v-if = "filter === 'completed'">
            <div v-for="task in completedTasks">
                <TaskDetailsMobile :task="task"/>
            </div>
        </div>
       </div>
      </main>
  
      <!-- Bottom Navigation Bar -->
      <footer class="fixed bottom-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center justify-center">
        <!-- filter -->
        <div class="filter-mobile">
            <button class="filter-btn" :class="{ 'active': filter === 'all' }"
            @click="filter = 'all'">All</button>
            <button class="filter-btn" :class="{ 'active': filter === 'favs' }"
            @click="filter = 'favs'">Favorites</button>
            <button class="filter-btn" :class="{ 'active': filter === 'pending' }"
            @click="filter = 'pending'">Pending</button>
            <button class="filter-btn" :class="{ 'active': filter === 'completed' }"
            @click="filter = 'completed'">Completed</button>
        </div>
        <div class="task-counts"
        v-if = "filter === 'all'">
        Total Tasks: {{ totalCount }}</div>
        <div class="task-counts"
        v-if = "filter === 'favs'">
        Favorites: {{ favsCount }}</div>
        <div class="task-counts"
        v-if = "filter === 'pending'">
        Pendings: {{ pendingCount }}</div>
        <div class="task-counts"
        v-if = "filter === 'completed'">
        Completed: {{ completedCount }}</div>
        <div class="fab-add"
        @click="taskStore.showAddTask = true">+</div>
        <div >
            <AddTaskPopup/>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
    import { ref } from 'vue'
    import { storeToRefs } from 'pinia';
    import { useTaskStore } from '@/stores/TaskStore';
    import AddTaskPopup from '../AddTaskPopup.vue';
import RefreshButton from '../RefreshButton.vue';
    export default {
    setup() {
        const taskStore = useTaskStore()

        const { tasks, loading, favs, totalCount, favsCount, pendingTasks, pendingCount, completedTasks, completedCount } = storeToRefs(taskStore)

        const filter = ref('all')

        return { taskStore, filter, tasks, loading, favs, totalCount, favsCount, pendingTasks, pendingCount, completedTasks, completedCount }
    },
  };
  </script>