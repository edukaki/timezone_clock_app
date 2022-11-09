import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataClock, setDataClock] = useState([]);

    //This deps empty array means that the useEffec will run just once
    useEffect(() => {
        fetch("http://worldtimeapi.org/api/ip")
            .then(data => data.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setDataClock(JSON.stringify(result));
                }
            ,
                // Here it's important to handle the errors
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                {dataClock}
            </div>
        )
    }
}



export default Clock
