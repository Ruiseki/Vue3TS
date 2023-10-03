<script setup lang="ts">
import type { Todolist, Todo } from '@/interfaces/todolists.interface';
import { reactive } from 'vue';
import { useTodolists } from '@/stores/todolists';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore()
let { count, increment } = counterStore
const todolists = useTodolists()
let { addTodolist, removeTodolist, updateTodolist } = todolists

const todo = reactive<Todo>({
    id: 0,
    name: "Todo name",
    checked: false
})

const todolist = {
    id : 0,
    name: "Todolist Name", 
    todos: [{id: 1, name: "Test", checked: false}]
}

const handleSubmit = () => {
    if(todolist.todos.length == 0)
        todo.id = 1
    else
        todo.id = todolist.todos[todolist.todos.length-1].id + 1

    todolist.todos.push({...todo});

    todo.name = ""

    updateTodolist(todolist)
}

function checkTodo(id : number){

}

</script>

<template>
    <div>
        <p id="todolist-title">{{ todolist.name }}</p>
        <ul id="todolist">
            <li class="todo" v-for="(test, i) in todolist.todos" :key="i">
                <input type="checkbox" @name=test>
                <label @for=test>{{ test }}</label>
                <hr>
            </li>
            <form @submit.prevent="handleSubmit" id="add-todo-div">
                <input type="text" v-model="todo.name">
                <button>Add a to-do</button>
            </form>
        </ul>
        
    </div>
</template>

<style scoped>
    #todolist-title{
        font-size: 24px;
        text-align: center;
    }

    #todolist{
        margin: 0px 30%;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    }

    .todo{
        list-style-type: none;
        padding: 20px 0px;
        padding-left: 10%;
        font-size: 20px;
    }

    #add-todo-div{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
