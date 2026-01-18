import React, {useState} from "react";
import style from "./faq.module.css"

const FAQ = (data) => {

    const [toggle, setToggle] = useState(false)

    return(
        <article className={style.faq}>
            <div>
                <h4>{data.faq.title}</h4>
                <button onClick={() => {setToggle(!toggle)}}>
                    {toggle ? "-" : "+"}
                </button>
            </div>
            { toggle && <p>{data.faq.desc}</p> }
        </article>
    )
}

export default FAQ;