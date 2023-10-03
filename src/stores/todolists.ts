import type { Todolist } from "@/interfaces/todolists.interface";
import { defineStore } from "pinia";

interface TodolistsState {
    todolists: Todolist[],
}

export const useTodolists = defineStore('todolists', {
        state: (): TodolistsState => ({
            todolists: []
        }),
        actions: {
            addTodolist(todolist: Todolist) {
                this.todolists.push(todolist);
            },
            removeTodolist(todolist: Todolist) {
                const index = this.todolists.indexOf(todolist);
                this.todolists.splice(index, 1);
            },
            updateTodolist(todolist: Todolist) {
                const index = this.todolists.indexOf(todolist);
                this.todolists.splice(index, 1, todolist);
            }
        },
    })