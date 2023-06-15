import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Gallery() {

    const [isTabActive, setIsTabActive] = useState(true)

    function handleClick(e) {
        if (e.target.classList.contains('tab-active')) {
            return
        } else {
            setIsTabActive((prevIsTabActive) => !prevIsTabActive)
        }
    }


    return (
        <section className="">
            <section className="tabs border-2 border-black w-4/5 m-auto">
                <Link 
                    to='ceramics'
                    onClick={handleClick} 
                    className={`tab tab-lifted ${isTabActive ? `tab-active` : ``} text-lg`}>ceramics
                </Link>
                <Link 
                    to='photography'
                    onClick={handleClick}
                    className={`tab tab-lifted ${!isTabActive ? `tab-active` : ``} text-lg`}>photography
                </Link>
            </section>
            <Outlet />
        </section>
    )
}
export default Gallery