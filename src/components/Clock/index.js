import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import './Clock.css'

const Clock = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataClock, setDataClock] = useState([]);

    const [time, setTime] = useState(new Date)

    function clock() {
        const newTime = new Date()
        newTime.setHours(newTime.getUTCHours() + parseInt(dataClock.utc_offset.substr(0, 3)))
        setTime(newTime);
    }


    // This deps empty array means that the useEffec will run just once
    useEffect(() => {
        fetch("http://worldtimeapi.org/api/ip")
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
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Updating...</div>
    } else {
        setInterval(clock, 1000);

        return (
            <></>
        )
    }
}



export default Clock
