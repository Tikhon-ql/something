import {makeAutoObservable} from "mobx"
import { method } from "../api/methods"
import modal, { ModalType } from "./modal"

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
        if(_title === "") {
            modal.toggle(true, ModalType.error)
            modal.setErrorMessage("Введите описание задачи")
            
            return
        }
        if(this.todos.find(item => item.title == _title)) {
            modal.toggle(true, ModalType.error)
            modal.setErrorMessage("Задача уже существует")

            return
        }
        else {
            this.todos.push({userId: _userId || 1, id: this.todos[this.todos.length-1]?.id+1 || 1, title: _title, completed: false})
        }
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