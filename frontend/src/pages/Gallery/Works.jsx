import React, { useState } from "react";
import Footer from "../../components/Footer"
import imageData from '../../imageDB'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import "react-lazy-load-image-component/src/effects/blur.css";

function Works() {
    const [index, setIndex] = useState(-1);
    const photos = imageData.data.map(obj => { return { src: obj.url } })
    const urls = imageData.data.map(obj => { return { src: obj.url, width: obj.width, height: obj.height } })

    // const images = imageData.data.map((image, i) => (
    //   <img 
    //     key={nanoid()} 
    //     className="ceramics-image hover:cursor-pointer"
    //     src={image.url} 
    //     alt={image.name} 
    //     onClick={() => setIndex(i)}
    //   />
    // ))


    return (
        <div>
            <section className="border-2 border-red-500 flex items-center px-4 h-full">
                <PhotoAlbum
                    className=""
                    layout="columns"
                    photos={urls}
                    onClick={({ index }) => setIndex(index)}
                />
                <Lightbox
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    slides={photos}
                    index={index}
                />

            </section>
            <Footer />

        </div>
    )
}
export default Works