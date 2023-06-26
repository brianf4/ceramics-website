import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Footer"

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
            <section className="border-2 border-red-500 flex flex-col justify-between h-full">
                <section>
                    <section className="tabs w-4/5 m-auto mt-2">
                        <Link 
                            to='ceramics'
                            onClick={handleClick} 
                            className={`tab tab-lifted tab-lg ${isTabActive ? `tab-active` : ``} text-lg`}>Ceramics
                        </Link>
                        <Link 
                            to='photography'
                            onClick={handleClick}
                            className={`tab tab-lifted tab-lg ${!isTabActive ? `tab-active` : ``} text-lg`}>Photography
                        </Link>
                    </section>
                    <Outlet />
                </section>
                
                <Footer />
            </section>
    )
}
export default Gallery