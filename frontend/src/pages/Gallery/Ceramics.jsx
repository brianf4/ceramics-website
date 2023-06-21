import imageData from '../../imageDB'
import axios from 'axios'
import { nanoid } from 'nanoid'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Ceramics() {
  
  const images = imageData.data.map((image) => (
    <LazyLoadImage
      className="ceramics-image"
      alt={image.name}
      src={image.url}
      effect="blur"
    />
  ))

  return (
    <div className="w-4/5 m-auto grid grid-cols-4 gap-4">
      {images}
    </div>
  );
}
export default Ceramics;
