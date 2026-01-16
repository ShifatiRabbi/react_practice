import React from "react";
import Todo from "./Todo";
import style from "./todos.module.css"

const Todos = (data) => {
    return (
        <div>
            <section className={style.todos}>
                {data.todos.map( (todo) => (<Todo todo={todo} key={todo.id} />) )}
            </section>
        </div>
    )
}

export default Todos;