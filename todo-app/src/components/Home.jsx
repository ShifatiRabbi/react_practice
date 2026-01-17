import React, {useState} from "react";
import Todos from "./Todos";
import style from "./home.module.css"
import NewTodo from "./NewTodo";
import {v4 as uuidv4} from "uuid"

const Home = () => {

    // const dummyTodos = [
    //     {
    //         id : 1,
    //         title : "Todo title 1",
    //         desc : "Todo description 1"
    //     },
    //     {
    //         id : 2,
    //         title : "Todo title 2",
    //         desc : "Todo description 2"
    //     }
    // ];


    const [todos, setTodos] = useState([]);

    const addNewTodos = (todo) => {
        setTodos((value) => {
            return [
                ...value, { id: uuidv4(), title: todo.title, desc: todo.desc }
            ]
        });
        // console.log(todo)
    }
    
    const handleDeleteKey = (deletedId) => {
        setTodos((value) => {
            return value.filter( (todo) => todo.id !== deletedId )
        })

        // const remainData = todos.filter( (todo) => {todo.id !== deletedId} )
        // setTodos(remainData)
    }

    return(
        <div className={style.container}>
            <h1 style={{color: "white"}}>Todo App</h1>
            <NewTodo addNewTodos={addNewTodos} />
            <Todos todos={todos}  handleDeleteKey={handleDeleteKey} />
        </div>
    )
}

export default Home;