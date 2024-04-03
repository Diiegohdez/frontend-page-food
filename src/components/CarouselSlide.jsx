import React, { useState, useEffect } from 'react';

const images = [
    "https://res.cloudinary.com/dxpkhjjby/image/upload/v1710881641/Pagina%20comida%20rapida/fondo%20de%20pantalla/vbk1elsrkmqwd9lr2f7u.jpg",
    "https://res.cloudinary.com/dxpkhjjby/image/upload/v1710960050/Pagina%20comida%20rapida/fondo%20de%20pantalla/ukyegj8x8syzw50cggkr.jpg",
    "https://res.cloudinary.com/dxpkhjjby/image/upload/v1710960050/Pagina%20comida%20rapida/fondo%20de%20pantalla/f58rcuccwcrbt0jofm7c.jpg",
    "https://res.cloudinary.com/dxpkhjjby/image/upload/v1710960050/Pagina%20comida%20rapida/fondo%20de%20pantalla/ecn6ncvzl56qep9ujyms.jpg",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1: forward, -1: backward

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === images.length - 1 && direction === 1) {
                setDirection(-1);
            } else if (currentIndex === 0 && direction === -1) {
                setDirection(1);
            } else {
                setCurrentIndex(prevIndex => prevIndex + direction);
            }
        }, 3000); // Cambia este valor para ajustar la velocidad del carusel

        return () => clearInterval(intervalId);
    }, [currentIndex, direction]);

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setDirection(-1);
    };

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setDirection(1);
    };

    return (
        <div className="relative w-full h-40 md:w-full md:h-60 lg:w-[1349px] lg:h-[322px] overflow-hidden">
            <div className="flex">
                <button className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10  text-white px-3 py-1 rounded-l focus:outline-none invisible" onClick={prevSlide}>
                    Prev
                </button>
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-white px-3 py-1 rounded-r focus:outline-none invisible" onClick={nextSlide}>
                    Next
                </button>
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt={`slide-${index}`} className="w-full h-40 md:w-full md:h-60 lg:w-[1349px] lg:h-[322px]"/>
                    ))}
                </div>
                <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {images.map((s, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${currentIndex === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Carousel;