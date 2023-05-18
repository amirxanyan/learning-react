
import './App.css';
import { useState } from 'react';
import TodoList from './TodosList';
import TodoForm from './Todoform';
import TodoFooter from './TodoFooter';
function Apps() {
    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            text: 'lessons CSS',
            isCompleted: false,
        },
        {
            id: Math.random(),
            text: 'lessons HTML',
            isCompleted: false,
        },
        {
            id: Math.random(),
            text: 'lessons JS',
            isCompleted: false,
        },

    ]);
    return (
        <div className='todo'>
            <TodoForm onAdd={(text) => {
                setTodos([...todos,
                {
                    id: Math.random(),
                    text: text,
                    isCompleted: false
                }
                ]);
            }} />
            <TodoList
                todos={todos}
                onDelete={(todo) => {
                    setTodos(todos.filter((t) => t.id !== todo.id))
                }}

                onChange={(newTodo) => {
                    setTodos(todos.map((todo) => {
                        if (todo.id === newTodo.id) {
                            return newTodo;
                        }
                        return todo
                    }))
                }}
            />
            <TodoFooter todos={todos} onClearCompleted={() => {
                setTodos(todos.filter((todo) => !todo.isCompleted));
            }} />

        </div>
    );
}
export default Apps