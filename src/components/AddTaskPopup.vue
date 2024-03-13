<template>
    <div class="add-task-popup" v-show="taskStore.showAddTask" @click="hidePopup">
      <!-- Popup content -->
      <div class="popup-content" @click.stop>
        <h3>Add New Task</h3>
        <!-- Add task form -->
        <form @submit.prevent="onSubmit">
          <input type="text" v-model="newTask" placeholder="What do you plan to do next, eh?" required>
        </form>
        <button type="submit"
        @click="onSubmit"
        >Add Task</button>
      </div>
    </div>
</template>
  
  <script>
  import { ref } from 'vue';
  import { useTaskStore } from '../stores/TaskStore'
  
  export default {
    setup() {
      const taskStore = useTaskStore()
      const newTask = ref('')
  
      const hidePopup = (event) => {
        if (event.target.classList.contains('add-task-popup')) {
          taskStore.showAddTask = false;
        }
      };

      const onSubmit = () => {
                if (newTask.value.trim()) {
                    taskStore.addTask(
                        {
                            id: Math.floor(Math.random() * 1000000).toString(),
                            title: newTask.value,
                            isFav: false,
                            completed: false,
                        }
                    )
                }
                 // reset the text editing controller
                 newTask.value = ''
                 taskStore.showAddTask = false
            }
  
      return { newTask, hidePopup, onSubmit, taskStore };
    },
  };
  </script>
  
  <style scoped>
  .add-task-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background-color: #80AB82;
    padding: 20px;
    width: 80%;
    min-width: 80%;
    text-align: center;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  
  .popup-content h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .popup-content form {
    width: 120%;
    box-sizing: border-box;
  }
  
  .popup-content input {
    padding: 10px;
    border-radius: 12px;
    margin-bottom: 10px;
  }
  
  .popup-content button {
    padding: 10px 20px;
    color: white;
    font-size: 0.8em;
    background-color: #363537;
    border: none;
    border-radius: 13px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .popup-content button:hover {
    color: black;
    background-color: #B3EFB2;
  }
  </style>