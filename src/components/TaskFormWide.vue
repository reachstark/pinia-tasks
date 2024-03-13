<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="newTask" placeholder="What do you need to do?">
        <button style="display: flex; align-items: center;">
      <i class="material-icons">add</i>Add</button>
    </form>
</template>

<script>
    import { useTaskStore } from '../stores/TaskStore'
    import { ref } from 'vue'
    export default {
        setup() {
            const taskStore = useTaskStore()

            const newTask = ref('')

            const onSubmit = () => {
                if (newTask.value.trim()) {
                    taskStore.addTask(
                        {
                            title: newTask.value,
                            isFav: false,
                            completed: false,
                        },
                        newTask.value
                    );
                }
                 // reset the text editing controller
                 newTask.value = ''
            }

            return { newTask, onSubmit }
        }
    }
</script>