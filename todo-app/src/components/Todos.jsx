import React from "react";
import Todo from "./Todo";
import style from "./todos.module.css"

const Todos = (data) => {
    return (
        <section className={style.todos}>
            {data.todos.map( (todo) => (<Todo todo={todo} key={todo.id}  handleDeleteKey={data.handleDeleteKey} />) )}
        </section>
    )
}

export default Todos;