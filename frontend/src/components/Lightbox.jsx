import imageDB from '../imageDB'
import React, { useState } from 'react';
import Lightbox from 'react-spring-lightbox';

const images = [
    {
        src: 'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
        loading: 'lazy',
        alt: 'Windows 10 Dark Mode Setting',
    },
    {
        src: 'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',
        loading: 'lazy',
        alt: 'macOS Mojave Dark Mode Setting',
    },
    {
        src: 'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
        loading: 'lazy',
        alt: 'Android 9.0 Dark Mode Setting',
    },
];

const CoolLightbox = () => {
    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);

    return (
        <Lightbox
          className='w-2/4 grid grid-cols-2'
            isOpen={true}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
            /* Add your own UI */
            // renderHeader={() => (<CustomHeader />)}
            // renderFooter={() => (<CustomFooter />)}
            // renderPrevButton={() => (<CustomLeftArrowButton />)}
            // renderNextButton={() => (<CustomRightArrowButton />)}
            // renderImageOverlay={() => (<ImageOverlayComponent >)}

            /* Add styling */
            // className="cool-class"
            // style={{ background: "grey" }}

            /* Handle closing */
            // onClose={handleClose}

            /* Use single or double click to zoom */
            // singleClickToZoom

            /* react-spring config for open/close animation */
            // pageTransitionConfig={{
            //   from: { transform: "scale(0.75)", opacity: 0 },
            //   enter: { transform: "scale(1)", opacity: 1 },
            //   leave: { transform: "scale(0.75)", opacity: 0 },
            //   config: { mass: 1, tension: 320, friction: 32 }
            // }}
        />
    );
};

export default CoolLightbox;