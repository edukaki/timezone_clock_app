import { useState } from 'react';
import './Clock.css'
import sun from '../../assets/img/icon/icon-sun.svg'
import moon from '../../assets/img/icon/icon-moon.svg'

const Clock = (props) => {
    const location = props.location;
    const dataClock = props.dataClock;
    const isLoaded = props.isLoaded;
    const error = props.error;

    const [time, setTime] = useState(new Date())

    function displayClock() {
        const newTime = new Date()
        newTime.setHours(newTime.getUTCHours() + parseInt(dataClock.utc_offset.substr(0, 3)))
        setTime(newTime);
        {props.getDayTime(newTime.getHours() >= 5 && newTime.getHours() < 18 ? "light" : "dark")}
    }
    
    function daytime() {
        return (
            <div className='c-clock__daytime'>
                <img src={time.getHours() >= 5 && time.getHours() < 18 ? sun : moon} alt='daytime' />
                <p>
                    {time.getHours() >= 5 && time.getHours() < 12 ? "Good morning" :
                        time.getHours() >= 12 && time.getHours() < 18 ? "Good afternoon" :
                        "Good evening"}
                    , it's currently
                </p>
            </div>
        )
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Updating...</div>
    } else {
        setInterval(displayClock, 1000);
        const amPm = time.toLocaleTimeString('en-US').substring(8)
        const hours = (time.getHours() % 12 || 12) >= 10 ? (time.getHours() % 12 || 12) : "0" + (time.getHours() % 12 || 12)
        const minutes = time.getMinutes() >= 10 ? time.getMinutes() : "0" + time.getMinutes()
        return (
            <div className='c-clock__display'>
                {daytime()}
                <div className='c-clock__time'>
                    <h1>{hours}:{minutes}</h1>
                    <span>{amPm}</span>
                </div>
                <p className='c-clock__location'>in {location.city}, {location.country_code2}</p>
            </div>
        )
    }
}



export default Clock
