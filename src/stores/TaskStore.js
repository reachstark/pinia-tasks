import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        loading: false,
        appName: 'Tudu - Tasks',
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        completedTasks() {
            return this.tasks.filter(t => t.completed)
        },
        pendingTasks() {
            return this.tasks.filter(t => !t.completed)
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
        pendingCount() {
            return this.tasks.reduce((preValue, curValue) => {
                return !curValue.completed ? preValue + 1 : preValue
            }, 0) // initial value
        },
        totalCount: (state) => {
            return state.tasks.length
        },
    },
    actions: {
        async fetchData() {
            this.loading = true
            const res = await fetch('http://localhost:3000/tasks')
            const tasks = await res.json()
            this.tasks = tasks
            this.loading = false
        },
        async toggleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isFav: task.isFav })
            })
        },
        async addTask(task) {
            this.tasks.push(task)

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            })
        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'DELETE',
            })
        },
        async toggleCompleted(id) {
            const task = this.tasks.find(t => t.id === id)
            task.completed = !task.completed

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ completed: task.completed })
            })
        },
    }
})