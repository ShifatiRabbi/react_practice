import React from "react";
import useFetch from "./useFetch";

const DataFetch = () => {

    const {data, error, isLoading} = useFetch("https://jsonplaceholder.typicode.com/todos");

    const loadingMessage = <p>Loading !!! Please Wait ...</p>
    const errorMessage = <p>{error}</p>
    const fetchingData = data && data.map((singleData) => {
        return <p key={singleData.id}>{singleData.title}</p>
    })
    
    return (
        <div>
            <h1> Todos </h1>
            {error && errorMessage}
            {isLoading && loadingMessage}
            {fetchingData}
        </div>
    )
}

export default DataFetch;