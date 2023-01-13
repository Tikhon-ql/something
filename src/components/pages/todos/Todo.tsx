import { useState } from 'react';
import {observer} from "mobx-react-lite"
import todo, { TodoType } from '../../../store/todo';
import Loader from '../../utilities/loader/Loader';
import './_todo.scss'
import { Button } from '../../../styles/uiKit';
import Close from '../../../images/close-dark.svg'
import ModalWindow from '../../../components/utilities/modal/Modal';
import modal, { ModalType } from '../../../store/modal';

const Todos = observer(() => {
    const [isLoading, setIsLoading] = useState(false)
    const [newTodo, setNewTodo] = useState<TodoType>({title: ""})

    return <>
        <section className="buttons">
            <div className="buttons__wrapper">
                <Button 
                    className="black-btn"
                    onClick={() => todo.getTodos(setIsLoading)}>
                        Нажми чтобы обновить список
                </Button>  

                <div>
                    <input type="text" onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}/>
                    <Button 
                        className="black-btn"
                        onClick={() => todo.addTodo(2, newTodo.title)}>
                            Добавить задачу
                    </Button>  
                </div>
            </div>
           
        </section>
        <section className="todos">
            <div className="todos-wrapper">
                {todo.todos.map(t => 
                    <div className='todo-item' key={t.id}>
                        <p className='todo-item__id'>{t.id}.</p>
                        <input className={`todo-item__status`} type={'checkbox'} checked={t.completed} onChange={() => todo.completeTodo(t.id)} />
                        <p className={`todo-item__title status-${t.completed}`}>{t.title}</p>
                        <div className='todo-item__close'><img src={Close} alt=""  onClick={() => todo.removeTodo(t.id)}/></div>
                    </div>
                )}
            </div>
        </section>

        <ModalWindow type={ModalType.error}>
            <p>{modal.modals.error.message}</p>
        </ModalWindow>

        {isLoading && <Loader isLoading={isLoading} />}
    </>
})

export default Todos