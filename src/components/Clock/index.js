import { useState } from 'react';
import { useApi } from '../../api/useApi/useApi';
import './Clock.css'

const Clock = () => {

    const [dataClock, isLoaded, error] = useApi("http://worldtimeapi.org/api/ip");

    const [time, setTime] = useState(new Date())

    function displayClock() {
        const newTime = new Date()
        newTime.setHours(newTime.getUTCHours() + parseInt(dataClock.utc_offset.substr(0, 3)))
        setTime(newTime);
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Updating...</div>
    } else {
        setInterval(displayClock, 1000);
        const amPm = time.toLocaleTimeString('en-US').substring(8)
        const hours = (time.getHours() % 12 || 12) >= 10 ? (time.getHours() % 12 || 12)  : "0" + (time.getHours() % 12 || 12)
        const minutes = time.getMinutes() >= 10 ? time.getMinutes() : "0" + time.getMinutes()
        return (
            <div className='c-clock__display'>
                <h1>{hours}:{minutes}</h1>
                <span>{amPm}</span>
            </div>
        )
    }
}



export default Clock
