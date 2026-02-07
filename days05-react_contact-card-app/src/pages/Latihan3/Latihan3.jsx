import { useState } from 'react'
import './Latihan3.css'

function Latihan3() {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {

        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue])
            setInputValue('')
        }

    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos)
    };

    return (
        <div className='todo-container'>
            <h1>Todo List</h1>

            <div className="input-group">
                <input
                    type="text"
                    placeholder='Masukan sesuatu ke list...'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()} />
                <button onClick={addTodo}>Tambah</button>
            </div>

            <ul className="todo-list">
                {todos.map((item, index) => (
                    <li key={index} className='todo-item'>
                        <span>{item}</span>
                        <button onClick={() => deleteTodo(index)} className='delete-btn'>
                            &times;
                        </button>
                    </li>
                ))}
            </ul>

            {todos.length === 0 && <p className='empty-state'>Belum ada list masuk...</p>}
        </div>
    );
}

export default Latihan3