import React, {useState, useEffect} from "react";

const useFetchAsync = (url) => {

    const [countries, setCountries] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            setLoading(false);
            setError(null);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }
    
    useEffect(() => {
        fetchData(url);
    }, [])


    return {countries, isLoading, error}
}

export default useFetchAsync;