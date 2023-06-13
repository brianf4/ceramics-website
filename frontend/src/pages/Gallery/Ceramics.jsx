import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Ceramics() {
  const [imageLoaded, setImageLoaded] = useState(false);


  return (
    <figure className="border-2 border-purple-700 flex flex-wrap">
      <LazyLoadImage
        className="w-max"
        alt="ceramic picture 1"
        src="../images/IMG_9318.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9322.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9336.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9343.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9352.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9354.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9362.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9367.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9371.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9318.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9376.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9394.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9414.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9418.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9439.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9441.jpeg"
        effect="blur"
      />
      <LazyLoadImage
        
        alt="ceramic picture 1"
        src="../images/IMG_9446.jpeg"
        effect="blur"
      />
    </figure>
  );
}
export default Ceramics;