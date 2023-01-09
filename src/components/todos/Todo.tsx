import React, { useEffect, useState } from 'react';
import {observer} from "mobx-react-lite"
import todo from '../../store/todo';
import Loader from '../../components/utilities/loader/Loader';
import './_todo.scss'

const Todos = observer(() => {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        todo.getTodos(setIsLoading)
    }, [])

    return <>

    <section className="todos">
        <div className="todos-wrapper">
            {todo.todos.map(t => 
                <div className='todo-item' key={t.id}>
                    <p className='todo-item__id'>{t.id}.</p>
                    <input className={`todo-item__status`} type={'checkbox'} checked={t.completed} onChange={() => todo.completeTodo(t.id)} />
                    <p className={`todo-item__title status-${t.completed}`}>{t.title}</p>
                </div>
            )}
        </div>
    </section>

        {isLoading && <Loader isLoading={isLoading} />}
    </>
})

export default Todos