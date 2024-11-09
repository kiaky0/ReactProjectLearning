import { useState } from "react";
import style from './form.module.css'

export default function Form({todos, setTodos}) {

    const [todo, setToDo] = useState({name:"", done:false});

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]); // ... is use to get previous item
        setToDo({name:"", done:false}) // make it empty in the field when item is added
    }

    return (
        <form className={style.todoform} onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
                <input 
                    className={style.modernInput} 
                    onChange={(e)=>setToDo({name:e.target.value, done: false})} 
                    value={todo.name} type="text" 
                    placeholder="Enter item"
                />
                <button className={style.modernButton} type="submit">Add</button>
            </div>  
        </form>
    )
}