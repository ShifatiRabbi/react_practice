import React, {useState, useEffect} from "react";
import Country from "./Country";
import { v4 as uuidv4} from "uuid"
import style from "./countries.module.css"

const Countries = (data) => {

    
    return (
        <section className={style.countries}>
            { data.countries.map( (country) => <Country country={country} key={uuidv4()} /> ) }
        </section>
    )
}

export default Countries;