import { useState } from "react";

function TodoList() {

    const [todos, setTodos] = useState([
        { id: 1, teks: 'Belajar React' },
        { id: 2, teks: 'Mengerjakan Tugas' },
    ]);

    const [inputValue, setInputValue] = useState('');


    const tambahTodo = () => {
        if (inputValue.trim() === '') return;

        const todoBaru = {
            id: Date.now(),
            teks: inputValue,
        };

        setTodos([...todos, todoBaru]);
        setInputValue('');
    };

    const hapusTodo = (id) => {
        const todosBaru = todos.filter((todo) => todo.id !== id);
        setTodos(todosBaru)
    };


    return (
        <div className="mini-card">
            <h3 style={{ marginBottom: '15px' }}>Todo List</h3>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    type="text"
                    className="input-field"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Tambah kegiatan baru..."
                    style={{ marginBottom: 0 }}
                />

                <button className="btn btn-primary" onClick={tambahTodo}>
                    Tambah
                </button>
            </div>

            <ul className="simple-list">
                {todos.map((todo) => (
                    <li key={todo.id} style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{todo.teks}</span>

                        <button className="btn btn-sm btn-danger" onClick={() => hapusTodo(todo.id)}>
                            Hapus
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList