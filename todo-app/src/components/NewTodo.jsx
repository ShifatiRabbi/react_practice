import React, {useState} from "react";
import style from "./newtodo.module.css"

const NewTodo = (data) => {

    const [todo, setTodo] = useState({ title : "", desc : "" });
    const {title, desc} = todo;

    const handleSubmit = (event) => {
        event.preventDefault();
        data.addNewTodos(todo)
        setTodo({title: "", desc: ""});
    }

    const handleData = (event) => {
        setTodo((value) => {
            return {
                ...value, [event.target.name] : event.target.value
            }
        });
    }

    return(
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style["form-field"]}>
                <label htmlFor="title">Title : </label>
                <input type="text" name="title" id="title" value={title} onChange={handleData}/>
            </div>
            <div className={style["form-field"]}>
                <label htmlFor="desc">Description : </label>
                <textarea type="text" name="desc" id="desc" value={desc} onChange={handleData}/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
} 

export default NewTodo;