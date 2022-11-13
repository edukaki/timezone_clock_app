import React, { useState } from 'react'
import './BtnMore.css'

const BtnMore = () => {
    const quotes = document.querySelector(".c-quotes");
    const infoMenu = document.querySelector(".c-info-menu");
    const clockArea = document.querySelector(".container");
    const [isActive, setIsActive] = useState(false);
    const [hoverColor, setHoverColor] = useState("#303030")

    return (
        <button className='c-btn__container'
            onMouseEnter={() => { setHoverColor("#999999") }}
            onMouseLeave={() => { setHoverColor("#303030") }}
            onClick={() => {
                setIsActive(!isActive);
                quotes.classList.toggle("c-quotes--hide");
                infoMenu.classList.toggle("c-info-menu--hide");
                clockArea.classList.toggle("container--active");
            }}>
            <span className='c-btn__text'>{!isActive ? "MORE" : "LESS"}</span>
            <div className='c-btn__arrow__container'>
                {!isActive ?
                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill={hoverColor} cx="20" cy="20" r="20" /><path stroke="#FFF" strokeWidth="2" fill="none" d="m14 21 6 6 6-6" /></g></svg> :
                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill={hoverColor} cx="20" cy="20" r="20" /><path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6" /></g></svg>
                }
            </div>
        </button>
    )
}

export default BtnMore
