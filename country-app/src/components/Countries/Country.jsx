import React, {useState, useEffect} from "react";
import style from "./country.module.css"

const Country = (data) => {

    const country = data.country;
    const {name, flags, capital, population, area, region} = country
    console.log(country)
    return (
        <article className={style.country}>
            <div>
                <img src={flags.png} alt={name.common} className={style.flag} />
                <h4>Name : {name.official}</h4>
                <h4>Capital : {capital}</h4>
                <h4>Population : {population}</h4>
                <h4>Area : {area}</h4>
                <h4>Region : {region}</h4>
            </div>
        </article>
    )
}

export default Country;