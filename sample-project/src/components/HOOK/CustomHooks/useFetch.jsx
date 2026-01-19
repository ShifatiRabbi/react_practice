import React, { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url).then(
            (response) => {
                if(!response.ok){
                    throw Error("Fetching is not successful");
                }else{
                    return response.json();
                }
            }
        ).then(
            (data) => {
                setData(data);
                setLoading(false);
                setError(null);
            }
        ).catch(
            (error) => {
                setLoading(false);
                setError(error);
            }
        )
    }, [url])

    return {data, isLoading, error}
}

export default useFetch;