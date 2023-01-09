import {makeAutoObservable} from "mobx"
import { method } from "../api/methods"

export type TodoType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

class Todo {
    todos:TodoType[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: TodoType) {
        this.todos.push(todo)
    }
    removeTodo(_id: number) {
        this.todos = this.todos.filter(t => t.id !== _id)
    }
    completeTodo(_id: number) {
        this.todos.map(t => {
            if(t.id === _id) {
                t.completed = !t.completed
            }
        })
    }

    async getTodos(setIsLoading: Function) {
        try {
            setIsLoading(true)
            const todos: TodoType[] = (await method.getTodos()).data;

            this.todos = [...this.todos, ...todos]
        }
        catch(e) {
            alert(e)
        }
        finally {
            setIsLoading(false)
        }
    }
}

export default new Todo();