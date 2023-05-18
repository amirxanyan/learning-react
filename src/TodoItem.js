function TodoItem({ todo, onChange, onDelete }) {
    return (
        <div>
            <label>
                <input  className="check" type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }} />

                {todo.text}

                <button className="buttonX" onClick={() => {
                    onDelete(todo);
                }}>Delete</button>
            </label>
        </div>
    )
}
export default TodoItem;