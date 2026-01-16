import React from "react";
import Todos from "./Todos";
import style from "./home.module.css"

const Home = () => {

    const dummyTodos = [
        {
            id : 1,
            title : "Todo title 1",
            desc : "Todo description 1"
        },
        {
            id : 2,
            title : "Todo title 2",
            desc : "Todo description 2"
        }
    ];

    return(
        <div className={style.container}>
            <h1 style={{color: "white"}}>Todo App</h1>
            <Todos todos={dummyTodos} />
        </div>
    )
}

export default Home;