import {makeAutoObservable} from "mobx"
import { method } from "../api/methods"

export type TodoType = {
    userId?: number,
    id?: number,
    title: string,
    completed?: boolean
}

class Todo {
    todos:TodoType[] = []

    constructor() {
        makeAutoObservable(this)
    }

    removeTodo(_id: number) {
        this.todos = this.todos.filter(t => t.id !== _id)
    }
    addTodo(_userId: number, _title: string) {
        this.todos.push({userId: _userId, id: this.todos[this.todos.length-1].id+1, title: _title, completed: false})
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
            const newTodos: TodoType[] = (await method.getTodos()).data;

            newTodos.map(elem => {
                if(this.todos.length == 0) 
                    this.todos.push(elem)
                else 
                    !this.todos.find(item => item.id == elem?.id) && this.todos.push(elem)
            })
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