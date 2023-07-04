import React, { useState } from "react";
import imageData from '../../imageDB'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import "react-lazy-load-image-component/src/effects/blur.css";

function Ceramics() {
  const [index, setIndex] = useState(-1);
  const photos = imageData.data.map(obj => { return {src: obj.url} } )
  const urls = imageData.data.map(obj => { return {src: obj.url, width: obj.width, height: obj.height} } )

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
    <div className="w-4/5 m-auto border border-accent p-4">
      <PhotoAlbum
        className=""
        layout="rows" 
        photos={urls} 
        onClick={({ index }) => setIndex(index)}
      />


      {/* <Blurhash
        hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
        width={450}
        height={600}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      /> */}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos}
        index={index}
      />

    </div>
  );
}
export default Ceramics;