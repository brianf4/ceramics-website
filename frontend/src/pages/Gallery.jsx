import React, { useState} from "react";

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
        <section className="w-4/5 m-auto">
            <section className="tabs border-2 border-black">
                <a
                    onClick={handleClick}
                    className={`tab tab-lifted ${isTabActive ? `tab-active` : ``}`}>Tab 1</a>
                <a
                    onClick={handleClick}
                    className={`tab tab-lifted ${!isTabActive ? `tab-active` : ``}`}>Tab 2</a>
            </section>
            <figure className="border-2 border-purple-700 flex flex-wrap justify-center gap-4">
                <img className="w-1/5" src="../images/IMG_9318.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9322.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9336.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9343.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9352.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9354.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9362.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9367.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9371.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9318.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9376.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9394.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9414.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9418.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9439.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9441.jpeg" alt="ceramic picture 1" loading="lazy" />
                <img className="w-1/5" src="../images/IMG_9446.jpeg" alt="ceramic picture 1" loading="lazy" />
            </figure>
        </section>
    )
}
export default Gallery