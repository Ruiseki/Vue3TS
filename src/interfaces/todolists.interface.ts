export interface Todo {
    name: string,
    id: number,
    checked: boolean
}

export interface Todolist {
    name: string,
    id: number,
    todos: Todo[]
}