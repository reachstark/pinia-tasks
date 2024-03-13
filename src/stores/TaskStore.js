import { defineStore } from 'pinia'
import { collection, addDoc, setDoc, updateDoc, getDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'
import db from '../firebase/init'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        loading: false,
        showAddTask: false,
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
        async refreshData() {
            try {
                const querySnapshot = await getDocs(collection(db, 'tudu-web'));
                const tasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                this.tasks = tasks;
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        },
        async loadData() {
            this.loading = true;
            try {
                const querySnapshot = await getDocs(collection(db, 'tudu-web'));
                const tasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                this.tasks = tasks;
            } catch (error) {
                console.error('Error fetching tasks:', error);
            } finally {
                this.loading = false;
            }
        },
        async toggleFav(id) {
            try {
                const taskRef = doc(db, 'tudu-web', id);
                const taskDoc = await getDoc(taskRef);
                if (taskDoc.exists()) {
                    await updateDoc(taskRef, { isFav: !taskDoc.data().isFav });
                    await this.refreshData(); // Refresh data after updating task
                }
            } catch (error) {
                console.error('Error toggling favorite status:', error);
            }
        },
        async addTask(task, title) {
            try {
                await setDoc(doc(db, 'tudu-web', title), { ...task, });
                await this.refreshData();
            } catch (error) {
                console.error('Error adding task:', error);
            }
        },
        async deleteTask(id) {
            if (window.confirm('Are you sure you want to delete this task?')) {
                try {
                    const taskRef = doc(db, 'tudu-web', id);
                    await deleteDoc(taskRef);
                    await this.refreshData();
                } catch (error) {
                    console.error('Error deleting task:', error);
                }
            }
        },
        async toggleCompleted(id) {
            try {
                const taskRef = doc(db, 'tudu-web', id);
                const taskDoc = await getDoc(taskRef);
                if (taskDoc.exists()) {
                    await updateDoc(taskRef, { completed: !taskDoc.data().completed });
                    await this.refreshData(); // Refresh data after updating task
                }
            } catch (error) {
                console.error('Error toggling completion status:', error);
            }
        },
    }
})