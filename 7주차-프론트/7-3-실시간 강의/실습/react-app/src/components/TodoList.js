import Todo from "./Todo";

function TodoList({ todoList, toggleHandler,removeHandler,handleChanger }) {
    

    return (
        <ul style={{padding:0}}>
            {todoList.map((v) => 
                <Todo value={v} toggleHandler={toggleHandler} removeHandler={removeHandler} handleChanger={handleChanger}></Todo>
            )}
        </ul>
    );
}

export default TodoList;