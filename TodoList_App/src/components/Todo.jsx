import { useState } from "react"
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo(){
    // store a list of todo
    const [todos, setTodos] = useState([]);
    // filter is to filter the object with particular condition
    const completedTodo = todos.filter((todo)=>todo.done).length
    const totalTodos = todos.length
    return (
        <div>
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos}/>
            <Footer completedTodo={completedTodo} totalTodos={totalTodos}/>
        </div>
        
    )
}

