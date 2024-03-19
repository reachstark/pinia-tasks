<template>
    <div class="refresh-btn" >
      <button @click="refresh">
      <i class="fas fa-sync-alt"></i> Refresh
    </button>
    </div>
  </template>

<script>
  import { useTaskStore } from '../stores/TaskStore'
  import '@fortawesome/fontawesome-free/css/all.css'
    export default {
        setup() {
            const taskStore = useTaskStore()

            const refresh = () => {
                taskStore.loadData()
            }
            return { refresh }
        }
    }
</script>

<style scoped>
button {
  background-color: #80AB82;
  padding-left: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 8px;
  border-radius: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #5E7B5E;
}
</style>