import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {
                id: 1,
                title: 'Learn Vue Basics',
                isFav: false,
                completed: true,
            },
            {
                id: 2,
                title: 'Learn Pinia - State Management',
                isFav: false,
                completed: false,
            },
            {
                id: 3,
                title: 'Learn Vue Advance',
                isFav: true,
                completed: false,
            }
        ],
        appName: 'Tudu - Tasks',
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        completedTasks() {
            return this.tasks.filter(t => t.completed)
        },
        favsCount() {
            return this.tasks.reduce((preValue, curValue) => {
                return curValue.isFav ? preValue + 1 : preValue
            }, 0) // initial value
        },
        completedCount() {
            return this.tasks.reduce((preValue, curValue) => {
                return curValue.completed ? preValue + 1 : preValue
            }, 0) // initial value
        },
        totalCount: (state) => {
            return state.tasks.length
        },
    },
    actions: {
        toggleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        },
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        toggleCompleted(id) {
            const task = this.tasks.find(t => t.id === id)
            task.completed = !task.completed
        },
    }
})