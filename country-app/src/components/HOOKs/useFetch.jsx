import React, {useState, useEffect} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(url).then((response) => {
            if(!response.ok){
                throw Error("Data fetching error !!!");
            } else{
                return response.json();
            }
        }).then((data) => {
            setData(data);
            setError(null);
            setLoading(false);
        }).catch((error) => {
            setError(error);
            setLoading(false);
        })
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;