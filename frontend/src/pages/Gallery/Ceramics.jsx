import React from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Ceramics() {
  const navigate = useNavigate()

  // refresh
  navigate(0)

  return (
    <div className="w-4/5 m-auto flex flex-col gap-y-4">

      {/* ****************************** ROW 1 *************************************   */}
      <figure className="border-2 border-purple-700 flex gap-4">
          <LazyLoadImage
            className="ceramics-image"
            alt="ceramic picture 1"
            src="../images/IMG_9318.jpeg"
            effect="blur"
          />

        <LazyLoadImage
            className="ceramics-image"
            alt="ceramic picture 1"
            src="../images/IMG_9352.jpeg"
            effect="blur"
          />

        <LazyLoadImage
            className="ceramics-image"
            alt="ceramic picture 1"
            src="../images/IMG_9336.jpeg"
            effect="blur"
          />

        <LazyLoadImage
            className="ceramics-image"
            alt="ceramic picture 1"
            src="../images/IMG_9336.jpeg"
            effect="blur"
          />

          <LazyLoadImage
            className="ceramics-image"
            alt="ceramic picture 1"
            src="../images/IMG_9322.jpeg"
            effect="blur"
          />
      </figure>

      {/* ****************************** ROW 2 *************************************   */}

      <figure className="border-2 border-purple-700 flex gap-4">
      <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9354.jpeg"
          effect="blur"
        />

        <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9362.jpeg"
          effect="blur"
        />

        <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9367.jpeg"
          effect="blur"
        />

        <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9371.jpeg"
          effect="blur"
        />

        <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9318.jpeg"
          effect="blur"
        />
      </figure>

      {/* ****************************** ROW 3 *************************************   */}

      <figure className="border-2 border-purple-700 flex gap-4">
      <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9376.jpeg"
          effect="blur"
        />

        <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9394.jpeg"
          effect="blur"
        />

        <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9414.jpeg"
          effect="blur"
        />

        <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9418.jpeg"
          effect="blur"
        />

        <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9439.jpeg"
          effect="blur"
        />

      </figure>
      
      {/* ****************************** ROW 3 *************************************   */}

      <figure className="border-2 border-purple-700 flex gap-4">
      <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9441.jpeg"
          effect="blur"
        />

        <LazyLoadImage
          className="ceramics-image"
          alt="ceramic picture 1"
          src="../images/IMG_9446.jpeg"
          effect="blur"
        />
      </figure>
      
    </div>
  );
}
export default Ceramics;
