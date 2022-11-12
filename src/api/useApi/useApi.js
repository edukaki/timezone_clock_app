import { useEffect, useState } from "react";

export function useApi(url){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataClock, setDataClock] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setDataClock(result);
                },
                // Here it's important to handle the errors
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [url])
    return [dataClock,isLoaded,error];
}